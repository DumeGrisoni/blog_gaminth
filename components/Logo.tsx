import Image from "next/image";
import logo from "../public/logo.png"

function NewLogo(props: any) {
    const {renderDefault, title} = props;
    return (
    <div className="flex items-center ml-2">
        <Image 
        className="rounded-full object-cover"
        height={48}
        width={48}
        src={logo}
        alt="Logo de l'application"
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
    )
}

export default NewLogo;