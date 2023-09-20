import React from "react";
import "./styles/QuoteBox.css";

export const QuoteBox = ({
    phrasesCelebres,
    phrasesFortune,
    phrasesGalaxies,
    topic,
    handleChangeQuote }) => {
    return (
        <section className="quoteBox">
            {
                topic !== 1 ? (
                    topic !== 2 ? (
                        <h1 className="titlePF" >Phrases Fortune</h1>
                    ) : (
                        <h1 className="title">Space Curiosities</h1>
                    )
                ) : (
                    <h1 className="titlePhC" >Phrases Celebres</h1>
                )}
            <section>
                {
                    topic !== 1 ? (
                        topic !== 2 ? (
                            <article>
                                <p className="phraseFortune">{phrasesFortune.phrase}</p>
                                <button className='refreshFortune'
                                    onClick={handleChangeQuote}>Try Luck</button>
                            </article>
                        ) : (
                            <article>
                                <p className="phrase">{phrasesGalaxies.phrase}</p>
                                <div className="centrar">
                                    <img className="refreshqp bx-tada-hover"
                                        onClick={handleChangeQuote} src="https://img.icons8.com/ios-filled/50/refresh--v1.png" alt="refresh--v1" />
                                </div>
                            </article>
                        )
                    ) : (
                        <article>
                            <p className="phraseCelebre">{phrasesCelebres.phrase}</p>
                            <i className='refresh bx bx-refresh bx-tada bx-spin-hover'
                                onClick={handleChangeQuote}></i>
                        </article>
                    )
                }
            </section>
            {
                topic !== 1 ? (
                    topic !== 2 ? (
                        <footer>
                            <footer className="footerFortune">
                                <h4 className="authorFortune">{phrasesFortune.author}</h4>
                            </footer>
                        </footer>
                    ) : (
                        <footer className="footer">
                            <h4 className="author">Fuente: {phrasesGalaxies.author}</h4>
                            <svg
                                className="svg"
                                width="301"
                                height="118"
                                viewBox="0 0 301 118"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M150.523 300.982C233.585 300.982 300.921 233.719 300.921 150.745C300.921 67.7716 233.585 0.508301 150.523 0.508301C67.4612 0.508301 0.125977 67.7716 0.125977 150.745C0.125977 233.719 67.4612 300.982 150.523 300.982Z"
                                    fill="url(#paint0_radial_171_1558)"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_171_1558"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(96.0431 -13.4187) rotate(-50.1262) scale(315.575 315.635)"
                                    >
                                        <stop stopColor="#ffffff" />
                                        <stop offset="0.9947" stopColor="#ffffff" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </footer>
                    )
                ) : (
                    <footer className="footerCelebre">
                        <h4 className="authorCelebre">{phrasesCelebres.author}</h4>
                    </footer>
                )
            }
        </section>
    );
};
