// @ts-ignore
import React from "react";
import './ElixirBanner.css';

function ElixirBanner() {
    return (
        <div className="elixir-banner">
            <a href="https://elixir-europe.org/platforms/data/elixir-deposition-databases" target="_blank"
               rel="noopener noreferrer">
                <div className="elixir-logo"></div>
                {/*TODO: Match the font of the text (h5 and span both)*/}
                <h5>European Variation Archive (EVA) is part of the ELIXIR infrastructure</h5>
                <div>
                    <small>
                        <span>The European Variation Archive (EVA) is an ELIXIR Deposition Database</span>
                        <span className="readmore"> Learn more &#8250;</span>
                    </small>
                </div>
            </a>
        </div>
    );
}

export default ElixirBanner;