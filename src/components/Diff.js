import Image from "next/image";

function Diff() {
    return (
        <figure className="diff aspect-video w-1/2 mx-auto" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <img alt="daisy" src="/cuhete.png" />
            </div>
            <div className="diff-item-2" role="img">
                <img
                    alt="daisy"
                    src="/cuhete_transformer.png" />
            </div>
            <div className="diff-resizer"></div>
        </figure>
    );
}

export default Diff;
