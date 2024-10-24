
const CapilizeFirstLetter = () => {

    const words = ['hello', 'world', 'javascript'];

    var capitalizaLetter = words.map((i) => {
        return i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
    })

    console.log(capitalizaLetter);


    return (
        <div>

        </div>
    )
}

export default CapilizeFirstLetter;
