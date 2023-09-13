import profile from "../../assets/images/profile/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h4 className='text-4xl font-bold '>knowledge Cafe</h4>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;