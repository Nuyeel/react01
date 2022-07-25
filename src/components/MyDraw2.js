import React, {useRef, useEffect} from "react";
import { productData } from "./ProductData";

export default function MyDraw2() {
    const realRef = useRef();

    useEffect(() => {
      console.log(realRef.current);
      const img = new Image();

      img.onload = ()=>{
        const ctx = realRef.current.getContext('2d');
        ctx.drawImage(img, 0, 0);
      }
      img.src='/imgs/dish.jpeg';

    }, [])
    

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
           <br/>
            <canvas ref={realRef} width="800" height="600" style={{border: '1px dotted blue'}}></canvas>
            <br/>
        </div>
    );
}
