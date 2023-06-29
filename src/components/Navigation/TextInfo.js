const TextInfo = (props) => {
    const {textContent} = props
    return (
        <div className="textInfo">
           {textContent}
        </div>
    )
}

export default TextInfo;