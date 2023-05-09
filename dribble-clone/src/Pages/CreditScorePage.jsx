import React from 'react'

const CreditScorePage = () => {


    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'space-between', fontSize: "25px", padding: "20px", backgroundColor: "rgb(47, 183, 137)" }} >
                <div style={{ color: "white", padding: "10px" }}>
                    CK
                </div>

                <div>
                    <button style={{ border: "1px solid black", padding: "10px", borderRadius: "20px", backgroundColor: "rgb(60,220,148)", color: "white" }} >Download Credit Karma</button>
                </div>
            </div>

            <div style={{ textAlign: "left", color: "white", backgroundColor: "rgb(60,220,148)", padding: "100px" }}>

                <h1 style={{ textAlign: "left", fontSize: "60px", fontWeight: "700", }}>
                    Find your credit <br />
                    score. for free.
                </h1>
                <h1 style={{ fontSize: "30px" }}>check your latest score instantly and find <br /> out if your'r good for your money</h1>
            </div>

            <div style={{ backgroundColor: "rgb(64, 182, 132)", paddingLeft: '80px', paddingBottom: "60px" }}>
                <h1 style={{ fontSize: "30px", textAlign: "left", color: "white", marginLeft: "20px", paddingTop: '20px' }}>tell  us  about yourself</h1>
                <h3 style={{ fontSize: "20px", textAlign: "left", color: "white", marginLeft: "20px" }}>we only use this information to find your credit score from the official bureau.</h3>
                <div>
                    <input style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", margin: "20px", width: '30%' }} type="text" placeholder='frist anme' />
                    <input style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", margin: "20px", width: '30%' }} type="text" placeholder='last name' /> <br /> <br />
                    <input style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", margin: "20px", width: '30%' }} type="numbere" placeholder='phone number' />
                    <input style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", margin: "20px", width: '30%' }} type="email" placeholder='email' /> <br />
                    <input type="checkbox" style={{ border: "1px solid black", }} />
                    <p style={{ color: "white" }} >send me update on whatsapp</p>
                    <button style={{ padding: '20px', backgroundColor: 'white', fontSize: "30px", borderRadius: "50px", margin: "20px", width: "300px" }} >Confirm</button>
                </div>

            </div>

            <div style={{ backgroundColor: "rgb(44, 152, 107)", paddingLeft: '80px', paddingBottom: "60px", color: 'white' }} >
                <h1 style={{ fontSize: "30px", textAlign: "left", color: "white", marginLeft: "20px", paddingTop: '20px' }} >Credit score checker</h1>
                <h3 style={{ fontSize: "20px", textAlign: "left", color: "white", marginLeft: "20px" }}>
                    the credit score checker allows you to calculate your credit score report and cibil score. it is a three-digit numeric expression that represents your creditworthiness.
                    <br />

                    if you are planning to request a credit card, then it is recommended to have your cibil score be at least 750. reviewing the history of credit of the applicant is an essential part of the screening process.
                </h3>
                

                <br /><br />

                <h1 style={{ fontSize: "30px", textAlign: "left", color: "white", marginLeft: "20px", paddingTop: '20px' }}>what is a credit score and how is it calculated?</h1>
                <h3 style={{ fontSize: "20px", textAlign: "left", color: "white", marginLeft: "20px" }}>a credit score is a statistical representation of one’s creditworthiness. it helps in evaluating your ability to pay back the amount you have borrowed. a person’s credit score usually ranges from 300-900, and the one with the highest score is considered to be a trustworthy applicant. always try to reach the highest in range as it becomes very beneficial at the time of applying for a loan or a credit card. whereas, if you have a low score or you fall in lower range this displays you are an irresponsible loan applicant and have not made timely payments of your loans/dues.</h3> <br />
                <h3 style={{ fontSize: "20px", textAlign: "left", color: "white", marginLeft: "20px" }}>credit bureaus collect this information for calculating a credit score, which includes</h3> <br />
                <ul style={{ paddingLeft: "60px" }}>
                    <li>personal information</li>
                    <li>credit history length</li>
                    <li>new credit</li>
                </ul>

                <h3 style={{ fontSize: "20px", textAlign: "left", color: "white", marginLeft: "20px" }}>some common factors that impact credit score are:</h3> <br />
                <ul style={{ paddingLeft: "60px" }}>
                    <li>amounts owed</li>
                    <li>payment history
                    </li>
                    <li>credit mix
                    </li>
                </ul>

                <h1 style={{ fontSize: "30px", textAlign: "left", color: "white", marginLeft: "20px", paddingTop: '20px' }} >why is it important to maintain a good credit score?</h1>
                <h3 style={{ fontSize: "20px", textAlign: "left", color: "white", marginLeft: "20px" }}>listed down some of the important reasons due to which you must maintain a good credit score:
                <br/>
                improves your eligibility for loans: a good credit score improves your eligibility to get a loan faster. a good credit score means that you pay the bills or outstanding amount timely that leaves a good impression of yours on the banks or other financial institutions where you have applied for a loan. <br/>
                higher credit card limits: a good credit score not only gets you the best of credit cards with attractive benefits or lower rate of interest on the loan you have applied for but also you are eligible for getting a higher loan amount. a good credit score means that you are capable of handling the credit in the best possible manner, therefore, banks or financial institutions will consider offering you a credit card with a higher limit.
                </h3> <br />


            </div>
        </div>
    )
}

export default CreditScorePage;
 
