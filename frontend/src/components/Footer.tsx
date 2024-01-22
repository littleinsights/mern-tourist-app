const Footer = () => {
    return(
        <div className="bg-green-700 py-10">
          <div className="container mx-auto flex justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">EpicJourneysHub.com</span>
            <span className="text-white font-bold tracking-tight flex gap-5">
                <p className="cursor-pointer">Travel Information</p>
                <p className="cursor-pointer">Contact Us</p>
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Use</p>
             </span>
          </div>
        </div>
    )
}

export default Footer;