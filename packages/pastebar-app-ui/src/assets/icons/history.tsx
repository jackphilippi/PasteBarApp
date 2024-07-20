import { SVGProps } from 'react'

export default function WrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0.294 3.317 24.273 26.397"
    >
      <path
        fill="currentColor"
        d="M19.14 29.714H8.502a4.27 4.27 0 0 1-4.271-4.271V14.934C.821 13.47.273 8.863 3.247 6.641a4.822 4.822 0 0 1 6.685.892h9.207a4.27 4.27 0 0 1 4.271 4.271v13.639a4.27 4.27 0 0 1-4.27 4.271ZM6.162 6.904c-2.778 0-4.515 3.007-3.125 5.414 1.388 2.405 4.862 2.405 6.251 0a3.622 3.622 0 0 0 .484-1.805 3.614 3.614 0 0 0-3.61-3.609Zm16.029 4.9a3.052 3.052 0 0 0-3.051-3.052h-8.492c1.264 3.166-1.078 6.606-4.486 6.59a4.963 4.963 0 0 1-.71-.07v10.171a3.05 3.05 0 0 0 3.05 3.05H19.14a3.05 3.05 0 0 0 3.051-3.05V11.804ZM18.788 23.24a.609.609 0 0 0-.61-.609H9.465a.61.61 0 0 0 0 1.219h8.713a.61.61 0 0 0 .61-.61Zm0-4.616a.61.61 0 0 0-.61-.61H9.465a.61.61 0 0 0 0 1.219h8.713a.61.61 0 0 0 .61-.609Zm0-4.616a.609.609 0 0 0-.61-.609h-5.806a.609.609 0 1 0 0 1.219h5.806a.61.61 0 0 0 .61-.61Zm-12.017-1.7v-1.795a.61.61 0 0 0-.609-.611h-1.32a.611.611 0 0 0 0 1.22h.71v1.186a.61.61 0 0 0 1.219 0Z"
        transform="rotate(180 12.364 17.455)"
      />
      <path
        stroke="currentColor"
        fill={`${props.lightingColor || 'white'}`}
        d="M7.992 4.719h5.81c.399 0 .723.323.723.724v1.678a.724.724 0 0 1-.723.724h-5.81a.724.724 0 0 1-.724-.724V5.443c0-.401.323-.724.724-.724Z"
        transform="translate(.006 -.486)"
      />
    </svg>
  )
}
