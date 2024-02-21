import Button from "@/components/form/button";

const BtnBlack = ({ text, click = () => {}, send = false, background="bg-black", top="5", width = 'full'}) => {
    return (
        <Button type="button" colors={`${background} w-${width} text-white hover:btn-sky-blue mt-${top}`} send={send} txt_button={text} click={click} />
    )
}

export default BtnBlack;