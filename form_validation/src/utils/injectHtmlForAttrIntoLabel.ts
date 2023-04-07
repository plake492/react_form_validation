import * as React from 'react'
import { checkIfAnyReactComponentType } from './detectReactComponents'

type componentStruncture = {
  [key: number]: { type: string; props: { [key: string]: any } }
}

interface initTypes {
  el: JSX.Element
  id: string
}

interface searchTypes extends initTypes {
  level?: number | null
  trackEls?: componentStruncture
}

interface generateReactComponentTypes {
  componentStructure: componentStruncture
  endingPoint: number
  currentPoint?: number
}

const searchForLabel = ({
  el,
  level = 0,
  trackEls = {},
  id,
}: searchTypes): componentStruncture | void => {
  const nextLevel = level + 1

  if (el.type === 'label') {
    return {
      ...trackEls,
      [nextLevel]: { type: el.type, props: { ...el.props, htmlFor: id } },
    }
  } else {
    if (el.props?.children) {
      if (Array.isArray(el.props.children)) {
        console.warn(
          'sibling elements inside component tree are currently not supported \n element returned with label element wrapping element'
        )
        return null
      } else if (checkIfAnyReactComponentType(el.props.children)) {
        return searchForLabel({
          el: el.props.children,
          level: nextLevel,
          id: id,
          trackEls: {
            ...trackEls,
            [nextLevel]: { type: el.type, props: el.props },
          },
        })
      } else if (typeof el.props.children === 'string') {
        return console.warn('!!!THERE IS NO LABEL!!!')
      }
    }
  }
}

const generateReactComponentStruture = ({
  componentStructure,
  endingPoint,
  currentPoint = 0,
}: generateReactComponentTypes): JSX.Element => {
  if (currentPoint !== endingPoint) {
    return React.createElement(
      componentStructure[currentPoint].type,
      {
        ...componentStructure[currentPoint].props,
      },
      generateReactComponentStruture({
        componentStructure,
        endingPoint,
        currentPoint: (currentPoint += 1),
      })
    )
  }
  if (currentPoint === endingPoint) {
    return React.createElement(
      componentStructure[currentPoint].type,
      componentStructure[currentPoint].props
    )
  }
}

/**
 * A function for ensuring that the lable element of a custom label prop, passed into any form fields
 * will contain a correct htmlFor id value
 *
 * @param param0 {el: a react component, id: the unique id string generated from the Fomr Compoennt}
 * @returns A react compoent that contains the correct htmlFor attribute on the label element of a custom label on a field
 */
export const setLabelHtmlForAttr = ({ el, id }: initTypes): JSX.Element => {
  // if the first parent element is a label, then add the id and return
  if (el.type === 'label') {
    return React.cloneElement(el, { htmlFor: id })
  }

  if (el.props?.children) {
    // This wpuld indicate that no children are elements with a type of label
    if (!checkIfAnyReactComponentType(el.props?.children)) {
      // If no label is present in the children tree
      return React.createElement('label', { htmlFor: id, children: el })
    } else {
      // set up component tracking obj structure
      let compObj = { 0: { type: el.type, props: el.props } }
      // Find the label and apply the correct id to the htmlFor attribute
      const componentStructure = searchForLabel({
        el: el.props.children,
        id: id,
        trackEls: compObj,
      })

      if (!!componentStructure) {
        const componentLevels = Object.keys(componentStructure)

        // Reconstruct and return as a new react component, containing all the same content, and the correct htmlFor attibute
        return generateReactComponentStruture({
          componentStructure,
          endingPoint: componentLevels.length - 1,
        })
      } else {
        // TODO FIgure out how to manage multiple children for a
        // ! If this gets triggered with a label element inside the component tree,
        // ! this will return an malformed html component structure.
        return React.createElement('label', { htmlFor: id, children: el })
      }
    }
  } else {
    console.warn('Invalid Label. Label must containe children')
  }

  return el
}
