
const BookMark = ({bookMark}) => {
    
    const {title} = bookMark;

    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h3 className="text-2xl"> {title}</h3>
        </div>
    );
};

export default BookMark;