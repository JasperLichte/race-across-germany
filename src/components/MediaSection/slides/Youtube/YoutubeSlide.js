import './YoutubeSlide.scss';

function YoutubeSlide() {
    return (
        <div className="custom-slide each-slide-effect YoutubeSlide">
            <div className='image'>
                <div className='logo'></div>
            </div>
            <div className='description'>
                <p>
                    Stay up to date with our journey towards the race across Germany by subscribing to our <strong>YouTube</strong> channel!
                    <br /><br />
                    We will be regularly uploading exciting videos documenting our training and preparations for the race,
                    as well as <strong>behind-the-scenes</strong> footage and updates from our team.<br />
                    From sharing our training routines to showcasing the gear we will be using, our channel will provide an inside
                    look at the dedication and hard work required to be successful in a race like this.<br />
                    You will also get to know our team better and see how we are working towards our goals.
                    <br /><br />
                    Subscribing to our channel will ensure that you don't miss out on any of the action,
                    and that you are part of our journey every step of the way!
                </p>
                <div className='ctas'>
                    <a href="https://www.youtube.com/@teamlichte" target="_blank" rel="noreferrer">Watch on Youtube</a>
                </div>
            </div>
        </div>
    );
}

export default YoutubeSlide;
