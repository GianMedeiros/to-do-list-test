import Button from "./evento/Button";

function Evento() {

    function meuEvento() {
        console.log("Ativando primeiro evento")
        
    }

    return (
    <>
        <p>Clique para desparar o evento:</p>
        <Button event={meuEvento} text="primeiro evento"/>

    </>
    );

}

export default Evento