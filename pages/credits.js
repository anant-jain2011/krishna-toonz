import Head from 'next/head'
import React from 'react'


const Credits = () => {
    return (
        <>
            <Head>
                <title>Credits</title>
            </Head>
            <div className="blocks w-full pt-20 overflow-hidden"></div> {/* <- this is the background */}

            <div className="h-full absolute top-20 px-8 shadow-3xl w-full"
                style={{ "height": "calc(100% - 5rem)" }}> {/* <- this is the main body */}

                <div className="flex flex-wrap items-center justify-center h-full"> {/* <- this is the middleman for making the glass center */}
                    <div className="w-[38%] h-fit rounded-xl glass -ml-4"> {/* <- this is the glass */}
                        <div className="text-2xl text-justify leading-relaxed my-2 mx-5 text-black">
                            <p className="my-5">
                                Creator & Artist - <a href="#" className="text-purple-800">Daksh Mittal</a>
                            </p>

                            <p className="my-5">
                                Voicover - <a href="#" className="text-purple-800">Krishna Mittal</a> and <a href="#" className="text-purple-800">Daksh Mittal</a>.
                            </p>

                            <p className="my-5">
                                Web Developer - <a href="https://github.com/anant-jain2011/" className="text-purple-800">Anant Jain</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Credits;