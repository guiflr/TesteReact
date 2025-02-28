import React from "react";

type TitleProps = {
    title: string;
    mobile?: boolean;
}

const ProductTitle = ({ mobile, title}: TitleProps) => {
    return (
        <h2 className={`text-lg font-bold ${mobile ? 'md:hidden' : 'hidden md:block'}`}>
            {title}
        </h2>
    );
};

export default ProductTitle;
