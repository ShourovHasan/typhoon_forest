import React from 'react';

const RecentlyAdded = () => {
    const trending = [
        {
            trending_id: 1,
            img: "https://www.yola.com/ws/media-library/3a75df090769446bae2d6abd655e1b23/yola-features-cover-1.png",
            price: 250
        },
        {
            trending_id: 2,
            img: "https://www.greenhouseschoolwebsites.co.uk/blog/wp-content/uploads/2019/10/pre-designed-school-website-template-1024x704.png",
            price: 300
        },
        {
            trending_id: 3,
            img: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png",
            price: 150
        },
        {
            trending_id: 4,
            img: "https://www-static.cdn-one.com/cmsimages/en_website-builder-templates.png",
            price: 400
        },
        {
            trending_id: 5,
            img: "https://static.wixstatic.com/media/2f9f4e_9c1fffc643084747a1ac779421d10616~mv2.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f9f4e_9c1fffc643084747a1ac779421d10616~mv2.jpg",
            price: 200
        },
        {
            trending_id: 6,
            img: "https://static.wixstatic.com/media/0d6674_fd85581587e84f388281869e97f79408~mv2.png/v1/fill/w_635,h_420,al_c,lg_1,q_85,enc_auto/0d6674_fd85581587e84f388281869e97f79408~mv2.png",
            price: 600
        },
    ]

    const themeCategory = [
        {
            id: 1,
            img: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
            name: "WordPress Themes"
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU",
            name: "Html Website Templates"
        },
        {
            id: 3,
            img: "https://play-lh.googleusercontent.com/G21Luul6_U8kkoj6mRF2xi-Pgl70aDaAlMmCrGGsYmWsfHnLo4JDkgWuwUVMZyRENw0",
            name: "WooComerce Themes"
        },
        {
            id: 4,
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhEQEBASExAWEBARFRISEhASEhEQFxUWGBcWFhcYHSggGBolGxUVITEiJS0rLi4wGCAzODMsNygtLi8BCgoKDg0OGhAQGy0lICUrNS0rKy0rLSstLS0tLystLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADwQAAIBAQQFCgMHAwUAAAAAAAABAgMEBRESBiExUcEiMkFSYXKBkaGxE3GSBzNCYsLR8COCoiQ0Q2Nz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADARAQACAQMCBQMCBQUAAAAAAAABAgMEETESIQUiMkFRE2GRcYFSobHR8BQVM0JD/9oADAMBAAIRAxEAPwDtRUkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+SaSxbwS1tvUkhM7ciGteklGDwgnUe9ao+b/YxZNdjr2jurnJENelpVFvl0mlvjJS9GkV18QieauRlhO2a0QqRU4SUovpXs9zN9L1vG9ZWxMSykgAAAAAAAAAAAAAAAAAAAAAAAAAADzOSSbbwSTbb2JITMRG8io3leFS1zVKknkx1R2ZsPxS7PY8fNmvnt0U4/wA/kotabTtCWsOj9GmsauE5YYtvmR8N3azXi0eOkb37pxjiOUJe1qpVZKnQoxSxwUoxwlN9iXQYdRet7dOOqu0xPaIacKVWM/hLGNTMlhmy8p7NfkU1retuiO0/hHvvslbDfNahP4dozOOx5ufHtT6V/Ea8eqyYrdOTj+iyLzWdpWqEk0mnimk01safSetExMbwuegAAAAAAAAAAAAAAAAAAAAAAAABW9Krw2UIvc54ekePkebrs3/nH7qslvZI3FdqoQxkv6kknLsXRH+dJp0uCMVe/MpUrtCP0qvBrChF7UnPDd0R4+Rm12faPp1/dzJb2btw3UqMVOS/qyWv8i6q4l+l08Y67zzLtK7d0PpTHJXjNbXCEv7otrgjHrY6c0WhDJ2sl9IbCq1JziuXFZk+lx2teWs16rFGTH1RzCd67w0tG70hGnKFWaiovGLb2xeOpb8H7lOj1ERSYvPCOO3baUpZL6s9Wp8KFT+plzKLUo5l04YrX8jbjz0yemU4vEztCQLUgAAAAAAAAAAAAAAAAAAAAADHaKyhGU5bIxcn4Eb26azYmdo3VS4KDr15VZ61F/Ee7O3yVx8DytLScuWbyopHVO62zmopt7Em38ketM7RMr1Ruam7TaXUktSbqNePJXt5HkaePq5uqf1/sor5rbrLaryo0ufUin1U80vJaz0758dPVK6bRCq3/eMK8ouCklGLWMsFjrPJ1WauW0TX2UXtEsVe+K81l+I4xwSwhydXz2+pG2pyWjaZJvMtAzygiL2qSjUhKLcZKKakng003g0zVg7QjbletE9J42lKlVajaEvkqqXStz3rxXZ6mLN1dp5aMeTq7Tysxfut3A6BwAAAAAAAAAAAAAAAAAAELpXXy0VHrzS/tWt+qRi119se3yhkns1LlvChZ6PKljOUnJxinKW5LctS6d5Tps2PFj7z3RraKww3lpH8SMqcKeEZJxcpPXg9upbPUhm102rNaw5bJvHZCQqyimlJpPDFJtY/PeYotMcSr3eCLgAAAQ19c+Pc4s1YOELI8uREBfvs1tDcK9NtvLOE1i3qUk1q+k2aa3MNOCe0wuhpXgAAAAAAAAAAAAAAACMt9+UaLcW3Ka2xitj7W9Rmy6rHjnae8ozeIQ1p0nqy1U4xgt75Uv29DFfX3n0xsrnLPsiLTa6lV41JyluxepfJbEY75L39U7q5mZYSDgAAAAAACGvrnx7nFmrBwhZHlyIBbfs3rYWipDrUW/GMo8JM0aafNt9l2CfM6KbWoAAAAAAAAAAAAAAAAc6tE805y3zlLzbZ85ed7TLLPLGRcAAG9Ybor1tcIcnrS5MfDf4GjFpcmTvEdkorMpejolL8dZLsjFv1bXsbK+Gz/wBrJ/TZnolHorSx7q/cn/ttf4pPpwhr4uh2bLjNSUscNTT1YY6vFGLU6WcO3fdC1dkaZUQCGvrnx7nFmrBwhZHlyIBOaFVslso7pZ4PxhLD1wLcM7XhZinzw6seg2AAAAAAAAAAAAAAAGK11MsJy3Qk/JMhknasyTw52j51kAAFp0fuBYKrWWLeuMHsS3yXS+z+L1tJoo267/hbWvysyR6ix9AAUrS20Zq+XohFL+5636OJ4niF+rJ0/Cm890IYEACGvrnx7nFmrBwhZHlyIBt3TW+HXoT6tam38lJY+mJKs7WiXaztMOznpt4AAAAAAAAAAAAAABoX7Uy2eq/y5fqajxM+qnbFb9Eb+lRTwmYAldG7Cq1ZZljCCzvtfQvP2Nejw/Uyd+ITpG8r2e+uYbVaoUo56klGO9+yXSyGTJWkb2lyZ2RE9KrOnqjUfaox4sxz4jij5/CPXDNZ9I7NPVmcH+dNeuwnXXYbe7sXhTLbX+JUnPrTk/DHV6YHi5b9d5spmd5YStwAhr658e5xZqwcIWR5ciAfGHXbbHW+JTp1OtCE/qSfE9Ss7xEt8TvDMdAAAAAAAAAAAAAAENpVPChh1qkV7vgY9dO2Lb7oZOFPPGZwC2aFU+RVl0uaj4JY/qPX8Nr5bStx8LIemsVLTRyz08ccmR4bs2OvxwwPI8T6uqvwqyK4eYrAAAABDX1z49zizVg4Qsjy5EAAdb0SrZ7HZ3up5Pobj+k9HDO9Ibcc+SEuWJgAAAAAAAAAAAAA6rumM+TSjvlKXkkv1HneIT2rCnLKsHlqQC16FVVlqw6VJS8GsP0nr+G28to+63HPZZT01jBbLJCtFwqRxi/NPen0MryY65I2tDkxup17XBUo4yhy6e9c6K7VxXoeNqNHfH3r3hVamyHMSAAAAQ19c+Pc4s1YOELI8uRAAHSvs7rZrK49StOPg1GXvJm3TTvRqwT5VoNC4AAAAAAAAAAAAABVNL6mNSEd1PHzk/2PJ18+eI+ynLygTAqAN26Le6FRT2x5slvj+62l+nzfSvE+3ulWdpX+z14zipQacWsU0fQ0vFo3heyEgZyRVdJbkUU61JYLbOK2d5cTytbpIiPqU/dVevvCsnlqwABDX1z49zizVg4Qsjy5EAAXn7M63+4h/wCU1/kn7RNWmnmGjTzzC8mtoAAAAAAAAAAAAAAUrSWeNon2KEf8U+J4msnfLLPk9SLMqAAA3bsvSpZ3jB4xe2D5r/Z9pfg1F8U9uPhKttl3uu8YWiOaG1apRe2L/nSe7hz1y13hdE7twudeZxTTTWKawa3o5MbjnFuofDqTp9Wckvljq9D5rLTovNWeY2nZgK3ACGvrnx7nFmrBwhZHlyIAAtP2dVstqlHrUZrxUov2TNGnnzLsPqdJNrUAAAAAAAAAAAAAAoN7VM1aq/8AskvJ4cD5/PO+W0/dmtzLUKkQ6Nq1XfVpKMpxeWUVJSWta1jg9zLcmC9IiZjs7MTDVKXExopOStCS2OMlL5JYp+eHmbdBMxm2hOnK8HurgDn1/v8A1FbvcEfPav8A5rKL8tAzIgENfXPj3OLNWDhCyPLkQABMaI1slss73zcPrjKPu0WYp2vCeOfNDrR6LcBwAAAAAAAAAAADETO0Dm855m5b235nzdp3mZZXw44yWajnnCC/FKMfN4E8deq8V+7sculOCwy4LDDDDow3H0vTG2zQirRo5ZpvHK4P8jwXlsMt9Dit7bfojNIbN3XVSoY/DWt7ZN4yaLcOnpi9MOxWI4bxe68VqihFyk8Ek23uS2kbWisTMjm1prOc5Te2UpS83ifNZLdVpt8s8zuxkHACGvrnx7nFmrBwhZHlyIAAz2Gt8OrSqdWpTn9Mk+B2J2mHYnaYdrPUbwAAAAAAAAAAAANe8KmWlVlupzfjgyvNO2OZ+zluJc+PnmUAz2G0ulUhUSTcXjg+ksxZPp3i3w7E7SvV23tSrrkywl0weqS8On5o97DqKZY7Svi0S3zQ6DcfJSSWLeC3vUjkzsKhpHfaq/0qTxhjypdbsXZ29J4+s1fX5KcKr29oV885WAAIa+ufHucWasHCFkeXIgAD40JHabrr/Eo0anWpU5eLimenSd6xLfWd4bRJ0AAAAAAAAAAAEbpDPCz1O3LHzkuBm1c7YpRvPllSDw2YAAExHbgSFC+7TDUqsmt0sJe+s001eWvEpRaWd6S2nrR+hFn+vzfb8O9ctG13hWq/eVJSW7ZHyWoz5M2TJ6pRm0y1ipwAAAIa+ufHucWasHCFkeXIgAAB1fQytnsdDsUofTKSXpgehhnekNuKfLCbLUwAAAAAAAAAAB1H35Yp16eSDinmT5TaWCx3LfgZ9TinJTphC8bwrNW4bTH/AI8y/LKL9McTzLaPLHspmloaVayVIc+nOPzjJIotjvXmJR2lhIOAAAAAAAAACGvrnx7nFmrBwhZHlyIAAAdG+zitjZ6kOrWflKMX75jbpp8stWCfKthoXAAAAAAAAAAAAAAAGGtZKU+fThL5xi35kLYqW5iPwTES0qtwWaX4MvdlJemwoto8U+yM0q0qui0HzKsl3lGXtgU28Pr7TKM4oaVXRisubOEvnmi/YotoMkcTCE4padW5LTHbSb7rjL2eJTbS5a+zk0s0qtGUedGUe9Fr3KZpaOYR2eCLgAAhr658e5xZqwcIWR5ciASFjuS1Vvu6FRre45Y/VLBE4x2txCUUtPCcsegdpl97Up012Y1JeSwXqW101vdZGC3ut2jtwQsSmo1Jzc8uObKknHHmpbOdvexGnHj6F9KRVMFiYAAAAAAAAAAAAAAAAAAAAAxsNatd9GfOpQfblSfmiq2DHbmsOTWJaVXR2zy2RlHuyf6sSm2ixTxCM46tKrorH8FVrslFP1TRTbw+PayP0vhFWvQirVmm61OMFFLFKUpbX0al6ncWktXtMoThmfdv2PQWyw+8lUqvc5ZI+UdfqaI01Y5TjDWOU5Y7qs9H7qjTg96is31PWXRSscQsisRxDdJJAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=",
            name: "Shofify Themes"
        },
        {
            id: 5,
            img: "https://i.pcmag.com/imagery/reviews/00InVWTsLrQWxxCpsQMKFcl-5.fit_scale.size_760x427.v1569482071.jpg",
            name: "PowerPoint Themes"
        },
        {
            id: 6,
            img: "https://www.shutterstock.com/image-illustration/scrolling-arrow-sign-swipe-icon-260nw-1693129870.jpg",
            name: "Landing Page Templates"
        },
        {
            id: 7,
            img: "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/cms-t.jpg",
            name: "CMS Templates"
        },
        {
            id: 8,
            img: "https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header-1200.png",
            name: "Graphics Templates"
        },
        {
            id: 9,
            img: "https://www.sendinblue.com/wp-content/uploads/2020/09/elementor.png",
            name: "Elementor Templates"
        },
        {
            id: 10,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Prestashop.svg/1200px-Prestashop.svg.png",
            name: "PrestaShop Templates"
        },
    ]
    return (
        <div className="">
            <div className="relative bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-10">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div className="">
                        <p className="text-lg lg:text-xl font-bold leading-9 text-center text-black">Recently Added</p>
                    </div>
                    <div>
                        <p className="text-base leading-normal sm:leading-none text-center text-gray-600">Meet our newbies! The latest website templates uploaded to the marketplace.</p>
                    </div>
                </div>
                <h1 className="hidden md:flex items-center   absolute right-6 text-end font-bold text-blue-500 cursor-pointer">
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </h1>
            </div>
            <div className='bg-gray-100 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-5'>
                {
                    themeCategory.map(item => <div key={item.id}  className={item.id === 1 ? "flex items-center justify-around rounded-lg shadow-xl bg-blue-400  text-white cursor-pointer px-2 py-2" : "flex items-center justify-around rounded-lg shadow-xl bg-white hover:bg-blue-400 text-black hover:text-white cursor-pointer px-2 py-2"}>
                        <img className='h-12 w-12 rounded ' src={item.img} alt="" />
                        <h1 className=' font-semibold '>{item.name}</h1>
                    </div>)
                }
            </div>
            <div className="mt-10 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-between gap-x-7 gap-y-7">

                    {
                        trending.map(item => <div key={item
                            .trending_id} className="flex justify-center w-full">
                            <div className="rounded-lg shadow-lg bg-white ">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img src={item.img} className="rounded-t-lg h-80 " alt="Louvre" />
                                    <div className="rounded-t-lg flex justify-end absolute top-0 right-0 bottom-0 cursor-pointer left-0 w-full h-full text-white overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out" style={{ backgroundColor: 'black' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-5 mr-5 w-10 h-10 z-50  text-white hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 mb-5">
                                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.3155 2.98718C37.3012 2.91809 37.2675 2.85449 37.2184 2.80384C37.1693 2.7532 37.1068 2.71761 37.0381 2.70124C32.4624 1.58249 21.8897 5.56921 16.1616 11.295C15.1399 12.3084 14.2085 13.4089 13.378 14.5841C11.6116 14.4278 9.84517 14.5583 8.3397 15.2145C4.09204 17.0841 2.85532 21.9622 2.51079 24.0606C2.49125 24.1755 2.49862 24.2933 2.53233 24.4048C2.56603 24.5163 2.62515 24.6185 2.70504 24.7033C2.78492 24.7881 2.88339 24.8533 2.99271 24.8936C3.10202 24.9339 3.21919 24.9483 3.33501 24.9356L10.1561 24.1833C10.161 24.6975 10.192 25.2112 10.2491 25.7223C10.2834 26.0773 10.441 26.409 10.6944 26.6598L13.3358 29.295C13.5869 29.5481 13.9185 29.7056 14.2733 29.7403C14.7815 29.7972 15.2924 29.8282 15.8038 29.8333L15.0553 36.6458C15.0428 36.7616 15.0573 36.8787 15.0977 36.9879C15.1381 37.0971 15.2032 37.1955 15.288 37.2754C15.3727 37.3552 15.4748 37.4144 15.5863 37.4481C15.6977 37.4819 15.8155 37.4894 15.9303 37.47C18.0249 37.1341 22.9116 35.8973 24.7702 31.6497C25.4264 30.1442 25.5608 28.3864 25.4092 26.6286C26.5872 25.798 27.6906 24.8663 28.7069 23.8442C34.453 18.127 38.417 7.79031 37.3155 2.98718ZM22.9741 17.0239C22.4494 16.4996 22.092 15.8314 21.9471 15.1039C21.8022 14.3764 21.8763 13.6223 22.1601 12.9369C22.4438 12.2515 22.9245 11.6657 23.5412 11.2535C24.1579 10.8414 24.8831 10.6214 25.6249 10.6214C26.3666 10.6214 27.0918 10.8414 27.7085 11.2535C28.3252 11.6657 28.8059 12.2515 29.0896 12.9369C29.3734 13.6223 29.4475 14.3764 29.3026 15.1039C29.1577 15.8314 28.8003 16.4996 28.2756 17.0239C27.9277 17.3723 27.5145 17.6487 27.0597 17.8373C26.6048 18.0259 26.1173 18.123 25.6249 18.123C25.1325 18.123 24.6449 18.0259 24.1901 17.8373C23.7352 17.6487 23.322 17.3723 22.9741 17.0239Z"
                                                fill="#4B5563"
                                            />
                                            <path
                                                d="M13.1562 31.2055C12.7281 31.6344 12.0414 31.8016 11.2148 31.9445C9.35781 32.2609 7.71797 30.6562 8.05156 28.7789C8.17891 28.0672 8.55547 27.0695 8.78984 26.8352C8.84107 26.7849 8.87517 26.7198 8.8873 26.6491C8.89942 26.5784 8.88895 26.5056 8.85739 26.4412C8.82582 26.3768 8.77475 26.3239 8.71144 26.2902C8.64812 26.2564 8.57578 26.2434 8.50469 26.2531C7.46622 26.3802 6.50011 26.851 5.76016 27.5906C3.92344 29.4289 3.75 36.25 3.75 36.25C3.75 36.25 10.575 36.0765 12.4117 34.2383C13.1536 33.4989 13.6251 32.5313 13.75 31.4914C13.7789 31.1648 13.3812 30.9703 13.1562 31.2055Z"
                                                fill="#4B5563"
                                            />
                                        </svg>
                                        <div className="">
                                            <p className=" text-lg leading-5 font-semibold text-gray-800 mt-5">Magetique - Furniture Magent</p>
                                            <p className=" text-base leading-6 font-normal text-gray-600 opacity-60 mt-3">by RockThemes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div>
                                            <div className="flex item-center justify-start mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>

                                            </div>

                                        </div>
                                        <div>

                                            <h1 className="text-gray-700 font-bold text-xl">
                                                ${item.price}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  px-4 py-4 bg-gray-600 hover:bg-blue-300 rounded text-base font-medium leading-none text-center text-white">Details</button>
                                        <button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  px-4 py-4 ml-4 bg-blue-400 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Live Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;