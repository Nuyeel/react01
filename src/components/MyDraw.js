import React, {useRef} from "react";
import { productData } from "./ProductData";

export default function MyDraw() {
    const cRef = useRef()




    return (
        <div>
            {productData.map((item) => {
                return (
                    <div key={item.id} style={{display: 'inline-block'}}>
                        <img
                            src={`/imgs/${item.img}`}
                            width="120px"
                            alt={item.name}
                        />
                    </div>
                );
            })}

            <canvas ref={cRef} width="800" height="600" style={{border: '1px'}}></canvas>
        </div>
    );
}
