declare module '*.svg?react' {
  import { SVGProps } from 'react'
  const ReactComponent: React.FunctionComponent<SVGProps<SVGElement>>

  export default ReactComponent
}
