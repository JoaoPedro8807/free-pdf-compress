import React, {useState} from "react"
export default function MoreAboutCard() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [visible, setVisible] = useState(false)
return (
    <div>
        {visible && (
            <div>
                ok
            </div>
        )}
    </div>
)

}
