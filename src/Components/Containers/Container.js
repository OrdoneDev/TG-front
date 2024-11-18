const Container = ({ ...props }) => {
    return (
        <div className="flex min-h-full flex-col items-center justify-center px-5 py-1 lg:px-8">
            <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4">
                {props.children}
            </div>
        </div>
    )
}

export default Container