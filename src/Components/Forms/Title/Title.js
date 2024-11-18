const Title = ({children, className, ...props}) => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" {...props}>
          <h2 className="mt-2.5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {children}
          </h2>
        </div>
    )
}

export default Title