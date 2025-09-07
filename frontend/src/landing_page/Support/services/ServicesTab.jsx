import Services from "./Services";
function ServicesTab() {
    return (
        <>
            <Services
                title="Account Opening"
                options={[
                    "Resident individual",
                    "Minor",
                    "Non Resident Indian (NRI)",
                    "Company, Partnership, HUF and LLP",
                    "Glossary"

                ]}
            />

            <Services
                title="Your Zerodha Account"
                options={[
                    "Your Profile",
                    "Account modification",
                    "Client Master Report(CMR) and Depository Participate(DP)",
                    "Nomination",
                    "Transfer and conversion of securities"

                ]}
            />
            <Services
                title="Kite"
                options={[
                    "IPO",
                    "Trading FAQs",
                    "Margin Trading Facility (MTF) and Margins",
                    "Charts and order",
                    "Alert and Nudges",
                    "General"

                ]}
            />

            <Services
                title="funds"
                options={[
                    "Add Money",
                    "Withdraw money",
                    "Add bank accounts",
                    "eMandates",
                   
                ]}
            />

               <Services
                title="Console"
                options={[
                    "Portfolio",
                    "Corporate actions",
                    "Funds statement",
                    "Reports",
                    "Profile",
                    "Segments",

                ]}
            />
               <Services
                title="Coins"
                options={[
                    "Mutual Funds",
                    "National Pension Scheme (NPS)",
                    "Fixed Deposit(FD)",
                    "Features on Coin",
                    "Payments and orders",
                    "General",

                ]}
            />
            
            





        </>
    )
}
export default ServicesTab;