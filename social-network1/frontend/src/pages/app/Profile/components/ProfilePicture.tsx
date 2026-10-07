import { BASE_URL, DEFAULT_PIC } from "../../../../helpers/constants"

type ImageAttribute =  React.ImgHTMLAttributes<HTMLImageElement>

export const ProfilePicture = ({src, ...props}:ImageAttribute) => {
    return (
          <img className="h-full w-full"
          src={src ? `${BASE_URL}/${src}` : DEFAULT_PIC}
          {...props}
          >
          </img>
    )
}