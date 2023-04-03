import './CharitySection.scss';

function CharitySection() {
  return (
    <section className='CharitySection' id='charity'>
        <div className='main'>
            <h2>Charity</h2>
            <div className='quote'>
                <p>Mental strength is at least as important as physical fitness for success in ultracycling.</p>
                <span>- Torsten Frank, 2018</span>
            </div>
            <div className='content'>
                <p>
                    One reason why Jasper can dream of winning the <i>Race Across Germany</i> is that he enjoys good mental health.<br/><br/>
                    Many of his fellow citizens do not have this luxury.<br/>
                    Depressive disorders are among the most common and most <strong>underestimated</strong> in terms of severity.<br/>
                    Approximately <strong>16 to 20 out of 100 people</strong> will suffer from <strong>depression or chronic depression</strong> at some point in their lives*.
                    To educate about this issue and accelerate the destigmatization of mental illness in the general population, 
                    our team has entered into a partnership with the <strong>Deutsche Depressionshilfe</strong> Foundation.<br/><br/>
                    With our participation in the <i>Race Across Germany</i>, we will launch a <strong>fundraising campaign</strong> to support the foundation in its work with the proceeds.
                    <br/><br/>
                    <span className='source'>*German Federal Ministry of Health (January 3, 2022)</span>
                </p>
                <div className='depressionshilfe_logo'></div>
            </div>
        </div>
    </section>
  );
}

export default CharitySection;
