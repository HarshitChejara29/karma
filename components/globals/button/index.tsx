import React from "react";

const Button = () => {

    return(
        <React.Fragment>
            <a href="https://play.google.com/store/search?q=100%20karma&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
                <button type="button" className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white tracking-tighter py-2 px-8 leading-6 bg-[#79CDC5]">Download Now</button>
            </a>
        </React.Fragment>
    );
};
export default Button;