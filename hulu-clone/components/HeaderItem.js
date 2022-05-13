function HeaderItem({Icon, title}) {
    return(
        <div className="flex flex-col items-center cursor-pointer w-12 md:w-20 hover:text-white group">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <span className="opacity-0 group-hover:opacity-100 tracking-widest">
                {title}
            </span>
        </div>
    )
}

export default HeaderItem;