
export default function Card() {

    return (
        <>
            <div className="mt-20 mx-52 flex flex-wrap rounded-lg border-2 border-black">
                {/* Quote Container */}
                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-xl h-24 flex justify-center items-center font-bold w-full rounded-t">
                    News you can Trust.
                </div>
                {/* Content Container  */}
                <div className="text-center mt-6 w-full">
                    <h3 className="text-lg font-semibold">Stay up to date with the Latest!</h3>
                    <p>
                        Subscribe to our newsletter for the latest news straight into your inbox.
                    </p>
                    <form className="flex flex-wrap">
                        <input placeholder="your@gmail.com" className="w-full mx-52 bg-slate-200 text-center placeholder:text-sm my-4 py-2 rounded" />
                        <button className="bg-blue-500 w-full text-white mx-52 py-2 rounded-full">Subscribe Now</button>
                    </form>
                    <p className="my-6 text-sm">We value your privacy</p>
                </div>
            </div>
        </>
    )
}