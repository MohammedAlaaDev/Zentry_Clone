const PaginationItem = ({ num, title, desc }: { num: string, title: string, desc: string }) => {
    return (
        <div className="pagination font-bold mx-14 mt-5 flex gap-4 z-40 relative justify-center md:justify-start">
            <div className="progress flex flex-col gap-2 items-center">
                <span className="num">{num}</span>
                <div className="progbar relative h-full w-1 rounded-xl overflow-hidden bg-blue-75">
                    <div className="progChild absolute top-[-100%] h-full w-full bg-blue-200" ></div>
                </div>
            </div>
            <div className="text flex flex-col gap-2 max-w-60">
                <div className="title">
                    {title}
                </div>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default PaginationItem