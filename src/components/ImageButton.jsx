
export const ImageButton = ({ text, className, id}) => {
  return (
    <a 
        onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('portfolio');
            
            if (target && id) {
                const offset = window.innerHeight * 0.15;

                const top = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({ top, behavior : "smooth" } );
            }
        }}
    className={`${className ?? ''} cta-wrapper`} id={id}>
        <div className="cta-image-button group">
            <div className="bg-circle"/>
            <div className="arrow-wrapper">
                <img src = "assets/ArrowHand_Border.png"></img>
            </div>
        </div>
    </a>
  )
}
