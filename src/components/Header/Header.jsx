import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Header.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
        document.body.classList.toggle('menu-open', !isOpen);
    };
    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768)
    }
    useEffect(() => {
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    const handleClick = () => {
        if (isMobile) {
            toggle()
        }
    }
    return (
        <header className={"header"}>
            <div className="container">
                <div className={"header-content"}>
                    <div className={"header-logo"}>
                        <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="174" height="45" viewBox="0 0 174 45"
                                 fill="none">
                                <path
                                    d="M38.0753 5.7612C34.7379 2.21464 30.0026 0 24.7505 0C16.1217 0 8.88899 5.9772 6.95792 14.0202L9.42476 13.3363C9.53267 13.3065 9.6444 13.3596 9.6894 13.4623C9.7344 13.5649 9.69741 13.6836 9.60208 13.7424C7.63707 14.9602 5.62822 16.4138 3.93511 17.8557C-2.32521 23.2974 -1.2674 28.8247 8.19839 25.0602C14.268 22.7784 12.0495 20.7424 11.2632 19.8451C11.1999 19.773 11.1716 19.6879 11.1789 19.5921C11.1861 19.4963 11.2269 19.4166 11.3001 19.3547C11.8443 18.8956 13.1938 19.3647 13.9405 19.549C15.0368 19.8199 16.1316 20.1188 17.2207 20.421C17.3237 20.4497 17.4243 20.4321 17.5117 20.3703L23.4921 16.131C23.5798 16.0688 23.6297 15.9799 23.6366 15.8727C23.6438 15.7654 23.6057 15.6704 23.5272 15.5975C22.6505 14.7839 20.1604 12.6704 19.7112 12.2876C19.4881 12.0975 18.7292 11.464 17.9246 10.7778C17.1105 10.084 16.2494 9.33637 15.849 8.94176C15.7732 8.86696 15.7385 8.77193 15.7476 8.66584C15.7571 8.55974 15.8082 8.47235 15.896 8.41205C17.0133 7.64572 19.4767 9.00702 20.3842 9.43674C20.5798 9.52948 20.7759 9.62337 20.9715 9.71801C21.7368 10.0886 22.504 10.474 23.2736 10.8644C23.3803 10.9186 23.4978 10.9156 23.6015 10.8557L24.1625 10.5317C24.434 10.3748 24.784 10.4687 24.9408 10.7404C25.0452 10.9217 25.0384 11.1377 24.9415 11.3083C24.8935 11.3934 24.8832 11.4842 24.9114 11.5781C24.9396 11.6716 24.9983 11.7418 25.0857 11.7861C25.7473 12.1212 26.41 12.4532 27.0735 12.7757C27.2825 12.8772 27.6646 13.1272 27.9411 13.1989C28.0509 13.2275 28.1581 13.2043 28.2458 13.1321C29.9568 11.7319 33.3327 9.63863 35.5402 9.30928C36.767 9.12609 38.0082 9.25203 38.3846 9.99355C38.3903 10.005 38.396 10.0149 38.4029 10.0256C38.8563 10.7225 38.3446 11.8613 37.5727 12.8329C36.1839 14.5816 32.6848 16.4608 30.6176 17.2439C30.5116 17.284 30.4377 17.3653 30.4075 17.4748C30.3316 17.7503 30.3568 18.2064 30.34 18.4384C30.2874 19.1746 30.2432 19.915 30.2024 20.6561C30.197 20.7538 30.2283 20.8397 30.295 20.911C30.3618 20.9824 30.4457 21.0191 30.5437 21.0198C30.7397 21.0213 30.9299 21.1232 31.0348 21.3045C31.1915 21.5762 31.0977 21.9266 30.8262 22.0834L30.2653 22.4074C30.1616 22.4674 30.1002 22.5674 30.0937 22.6872C30.035 23.7695 29.9713 24.8465 29.8847 25.9052C29.8027 26.907 29.7493 29.7227 28.5272 30.3073C28.4311 30.3531 28.33 30.3539 28.2336 30.3089C28.1371 30.2638 28.0723 30.186 28.0456 30.0829C27.7645 28.9999 27.1876 25.643 27.0816 25.0629C26.9752 24.482 26.3913 21.2671 26.1256 20.1005C26.1015 19.9955 26.0382 19.9154 25.9421 19.868C25.846 19.8207 25.7435 19.8192 25.6462 19.8642L18.9866 22.928C18.8894 22.9727 18.8242 23.0509 18.7971 23.1547C18.5138 24.2496 18.2255 25.348 17.9117 26.4337C17.697 27.1772 17.5628 28.8209 16.8851 29.051C16.7097 29.1105 16.5198 28.9964 16.4523 28.8235C14.5491 23.9619 10.2873 29.5559 11.7871 31.1901C12.3888 31.8457 12.9982 32.5025 13.6125 33.1605C17.2623 37.0684 21.0866 41.0069 24.4843 44.8733C24.5548 44.9534 24.6433 44.9996 24.7501 45C24.8569 45.0004 24.9457 44.9546 25.0166 44.8748C30.2485 38.9781 39.8775 30.5989 42.421 22.2723C43.1295 19.9531 43.3564 16.8562 42.6845 14.5083C42.45 13.6893 37.9472 16.112 38.1794 15.583C38.4525 14.9609 47.1609 11.2442 46.9977 7.15265C46.9089 4.92808 43.5368 3.91331 38.0753 5.7612Z"
                                    fill="#FF715B"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M127.834 11.0752L127.905 11.1047C128.348 11.2998 128.672 11.6454 128.84 12.0508C129.01 12.4599 129.021 12.931 128.836 13.3681C128.42 14.4242 127.932 15.7019 127.397 17.099C125.448 22.198 122.889 28.8883 121.044 32.2099C120.904 32.5427 120.677 32.8141 120.398 33.0017C120.114 33.193 119.777 33.2996 119.424 33.2996C119.061 33.2996 118.721 33.1938 118.434 33.0055C118.148 32.8157 117.918 32.5427 117.778 32.2099C116.237 29.4359 114.914 25.8347 113.59 22.233C112.44 19.1013 111.289 15.9692 109.995 13.3802C109.819 12.9393 109.836 12.4629 110.007 12.05C110.177 11.6394 110.501 11.2885 110.939 11.0964L110.945 11.0949C111.398 10.9036 111.876 10.9187 112.291 11.0881C112.713 11.2613 113.07 11.5963 113.263 12.0364L119.424 26.9285C120.095 25.309 120.796 23.6662 121.501 22.0142C122.928 18.6724 124.37 15.2935 125.607 11.9955C125.79 11.5804 126.132 11.2635 126.533 11.0949C126.936 10.924 127.403 10.9021 127.834 11.0752ZM150.297 29.6955H139.056V23.8613H148.719C149.209 23.8613 149.649 23.6662 149.968 23.3494C150.286 23.0317 150.48 22.5916 150.48 22.0993C150.48 21.6191 150.283 21.1745 149.962 20.8531C149.645 20.537 149.208 20.3381 148.718 20.3381H139.055V14.5856H150.024C150.516 14.5856 150.957 14.392 151.274 14.0736C151.592 13.756 151.786 13.3151 151.786 12.8236C151.786 12.3321 151.592 11.8919 151.273 11.5736C150.955 11.2567 150.515 11.0616 150.025 11.0616H137.295C136.815 11.0616 136.37 11.259 136.049 11.5804C135.733 11.8965 135.533 12.3343 135.533 12.8236V31.4567C135.533 31.9453 135.732 32.3831 136.049 32.7C136.37 33.0213 136.815 33.2187 137.295 33.2187H150.297C150.789 33.2187 151.229 33.0236 151.546 32.7052C151.864 32.3869 152.059 31.9468 152.059 31.4567C152.059 30.966 151.865 30.5258 151.547 30.2067C151.229 29.8899 150.789 29.6955 150.297 29.6955ZM79.2403 30.0199C78.8932 29.759 78.447 29.6252 77.9857 29.6683C77.935 29.6675 77.7997 29.6585 77.6152 29.5647C77.3792 29.4437 77.076 29.1926 76.7697 28.6777C76.344 27.9222 75.8623 27.2189 75.339 26.5754C74.9548 26.102 74.5472 25.6619 74.1237 25.2573L74.3597 25.162C74.644 25.041 74.9155 24.9049 75.1726 24.762L75.1771 24.7605C76.2615 24.1389 77.0956 23.2964 77.6583 22.2672C78.2179 21.2448 78.5075 20.0447 78.5075 18.6994C78.5075 18.0974 78.4644 17.5167 78.3721 16.9639C78.2799 16.4118 78.1362 15.8878 77.935 15.3985C77.7619 14.9508 77.5516 14.5319 77.3044 14.1477C77.0571 13.7643 76.7659 13.4089 76.4317 13.0837C76.0112 12.664 75.5136 12.292 74.9586 11.9842C74.4156 11.684 73.8227 11.4481 73.1981 11.2938C72.3012 11.0631 71.6108 11.0624 71.4966 11.0624H63.418C62.9264 11.0624 62.4856 11.2567 62.1695 11.5751C61.8504 11.8935 61.656 12.3336 61.656 12.8236V31.484C61.656 31.9642 61.8534 32.4088 62.1748 32.7302C62.4909 33.0463 62.9287 33.2459 63.418 33.2459C63.9057 33.2459 64.3428 33.0471 64.6612 32.7287C64.9826 32.4073 65.18 31.9634 65.18 31.484V14.5856H71.4974C71.5443 14.5856 71.942 14.5962 72.4585 14.7406C72.7346 14.8177 73.0416 14.9327 73.3403 15.1028C73.58 15.2465 73.7895 15.4099 73.971 15.5929C74.1547 15.7766 74.3113 15.9816 74.4428 16.2062C74.6243 16.5207 74.7589 16.8845 74.8489 17.2943C74.9412 17.714 74.9858 18.1829 74.9858 18.6986C74.9858 19.4375 74.8648 20.0447 74.61 20.5347C74.3612 21.0142 73.9785 21.3953 73.4492 21.697C72.9599 21.9731 72.3595 22.1818 71.6501 22.3239C70.928 22.4676 70.0969 22.5402 69.1577 22.5402C68.7001 22.5402 68.2752 22.7104 67.9583 22.9962C67.6437 23.279 67.4335 23.676 67.3979 24.1336C67.3488 24.5865 67.4743 25.0153 67.7246 25.3533C67.9764 25.6936 68.3553 25.9417 68.8106 26.0286L68.8506 26.0369H68.8854C68.9013 26.0369 69.1115 26.105 69.5138 26.2963C69.7596 26.4135 70.0545 26.5739 70.3789 26.7871L70.382 26.7886C71.03 27.2038 71.635 27.7173 72.1916 28.3215C72.7565 28.934 73.2715 29.6411 73.7343 30.4328C74.1857 31.2178 74.6954 31.7713 75.1915 32.1653C75.6936 32.5638 76.1821 32.8013 76.5814 32.9488L76.5973 32.9533C76.9497 33.0667 77.2665 33.1287 77.5342 33.159C77.9766 33.2096 78.3011 33.1779 78.4372 33.159C78.9136 33.0887 79.3197 32.824 79.5881 32.4602C79.8558 32.0965 79.9882 31.6292 79.9178 31.1543C79.8483 30.6809 79.5942 30.2846 79.2403 30.0199ZM173.488 30.2347C173.17 29.9171 172.73 29.7227 172.239 29.7227H162.14V12.8236C162.14 12.3336 161.946 11.8935 161.628 11.5743C161.311 11.2567 160.871 11.0624 160.379 11.0624C159.899 11.0624 159.454 11.2598 159.133 11.5811C158.817 11.8972 158.617 12.3351 158.617 12.8244V31.4847C158.617 31.9717 158.816 32.4088 159.134 32.7279C159.457 33.0493 159.9 33.2467 160.379 33.2467H172.239C172.73 33.2467 173.171 33.0516 173.488 32.7347C173.806 32.4171 174 31.977 174 31.4847C174 30.9924 173.806 30.5516 173.488 30.2347ZM98.1305 11.3324C98.4065 11.504 98.6364 11.7528 98.7786 12.0545C99.7964 14.1354 100.809 16.2222 101.823 18.3098L101.823 18.311L101.824 18.3124C103.834 22.4532 105.845 26.5972 107.899 30.7051C108.101 31.1255 108.116 31.5936 107.973 32.0088C107.831 32.4232 107.53 32.7877 107.102 33.0017L107.064 33.0213C106.627 33.2399 106.15 33.2543 105.731 33.1121C105.312 32.9707 104.948 32.6705 104.735 32.2598C104.27 31.3316 103.819 30.3897 103.368 29.4494L103.368 29.449L103.368 29.4486C103.138 28.969 102.908 28.4898 102.677 28.0129C102.056 27.8481 101.417 27.7528 100.758 27.7294C100.038 27.7036 99.2898 27.7634 98.5154 27.9071C97.791 28.0379 97.0506 28.2375 96.2937 28.5067C95.5382 28.7752 94.7669 29.1147 93.9827 29.5269C93.0684 30.0109 92.2434 30.5342 91.5522 31.0151C90.1956 31.9589 89.3645 32.7302 89.3471 32.7476C89.1905 32.9041 88.9977 33.0282 88.792 33.1129C88.5795 33.1998 88.3534 33.2459 88.1379 33.2459C87.9587 33.2459 87.7658 33.2172 87.5753 33.1537C87.3991 33.0955 87.2282 33.0077 87.0754 32.889C86.7427 32.6395 86.5143 32.2833 86.4205 31.8946C86.3275 31.5089 86.3638 31.0892 86.5551 30.7066L95.6123 12.0387C95.7696 11.7422 95.998 11.4965 96.271 11.3271C96.5455 11.1577 96.8601 11.0624 97.1913 11.0624C97.5263 11.0624 97.853 11.1599 98.1305 11.3324ZM97.8575 24.4519C98.4806 24.3415 99.0947 24.2644 99.7034 24.2296C100.072 24.2084 100.438 24.2024 100.801 24.2137L97.1943 16.8391L92.6253 26.2812C93.4367 25.8638 94.2534 25.5076 95.0686 25.2142C96.0093 24.8754 96.9433 24.6221 97.8545 24.4534L97.8575 24.4519Z"
                                      fill="#2C2C2C"/>
                            </svg>
                        </Link>
                    </div>
                    <nav className={`header-menu ${isOpen ? "active" : ""}`}>
                        <ul className={"header-menu-list"}>
                            <li className={"header-menu-item"}>
                                <Link to={"/"} className={"header-menu-link"} onClick={handleClick}>Destination</Link>
                            </li>
                            <li className={"header-menu-item"}>
                                <Link to={"/"} className={"header-menu-link"} onClick={handleClick}>Offer</Link>
                            </li>
                            <li className={"header-menu-item"}>
                                <Link to={"/"} className={"header-menu-link"} onClick={handleClick}>Tour</Link>
                            </li>
                            <li className={"header-menu-item"}>
                                <Link to={"/"} className={"header-menu-link"} onClick={handleClick}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={"header-actions"}>
                        <ul className={"header-actions-list"}>
                            <li className={"header-actions-item"}>
                                <Link to={"/"} className={"header-actions-link"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"
                                         fill="none">
                                        <path
                                            d="M10.0003 11C7.52064 11 5.33626 8.67031 5.12532 5.80625C5.01751 4.35312 5.46751 3.00781 6.39095 2.01875C7.30032 1.03906 8.5847 0.5 10.0003 0.5C11.4066 0.5 12.6863 1.04375 13.6003 2.02812C14.5284 3.02656 14.9784 4.36719 14.8706 5.80625C14.6597 8.67031 12.4753 11 10.0003 11ZM10.0003 2C9.00657 2 8.11126 2.37031 7.48782 3.04062C6.85501 3.72031 6.54564 4.66719 6.62064 5.69844C6.77064 7.76094 8.31751 9.50469 9.99564 9.50469C11.6738 9.50469 13.2206 7.76094 13.3706 5.69844C13.4456 4.68125 13.1363 3.73906 12.4941 3.05C11.8753 2.37031 10.9847 2 10.0003 2Z"
                                            fill="#0F172A"/>
                                        <path
                                            d="M18.2503 21.5H1.75035C1.30035 21.5 0.897224 21.3124 0.615974 20.9796C0.311286 20.614 0.189411 20.1171 0.278473 19.6156C0.672223 17.4218 1.90972 15.575 3.85035 14.2859C5.57535 13.1375 7.75972 12.5046 10.0003 12.5046C12.241 12.5046 14.4253 13.1375 16.1503 14.2859C18.091 15.5796 19.3285 17.4218 19.7222 19.6156C19.8113 20.1171 19.6894 20.614 19.3847 20.9796C19.1035 21.3124 18.7003 21.5 18.2503 21.5ZM1.75972 20H18.241C18.2503 19.9765 18.255 19.939 18.2457 19.8781C17.5191 15.8421 13.4597 14 10.0003 14C6.54097 14 2.4816 15.8421 1.75504 19.8781C1.74566 19.939 1.75035 19.9765 1.75972 20Z"
                                            fill="#0F172A"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className={"header-actions-item"}>
                                <Link to={"/"} className={"header-actions-link"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M6.75 19.5C6.75 18.6716 7.42157 18 8.25 18C9.07843 18 9.75 18.6716 9.75 19.5C9.75 20.3284 9.07843 21 8.25 21C7.42157 21 6.75 20.3284 6.75 19.5Z"
                                              fill="#0F172A"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M17.25 19.5C17.25 18.6716 17.9216 18 18.75 18C19.5784 18 20.25 18.6716 20.25 19.5C20.25 20.3284 19.5784 21 18.75 21C17.9216 21 17.25 20.3284 17.25 19.5Z"
                                              fill="#0F172A"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.5 3.75C1.5 3.33579 1.83579 3 2.25 3H5.25C5.61393 3 5.92534 3.26127 5.98859 3.61966L8.12924 15.75H19.5C19.9142 15.75 20.25 16.0858 20.25 16.5C20.25 16.9142 19.9142 17.25 19.5 17.25H7.5C7.13607 17.25 6.82466 16.9887 6.76141 16.6303L4.62076 4.5H2.25C1.83579 4.5 1.5 4.16421 1.5 3.75Z"
                                              fill="#0F172A"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M20.5425 5.25C20.7088 5.24996 20.8731 5.28681 21.0235 5.3579C21.1741 5.42907 21.307 5.53277 21.4126 5.66152C21.5182 5.79027 21.5939 5.94086 21.6342 6.10243C21.6746 6.26396 21.6786 6.43243 21.6459 6.59568C21.6459 6.59571 21.6459 6.59575 21.6459 6.59578L20.2959 13.3458C20.2448 13.6009 20.1069 13.8304 19.9056 13.9953C19.7044 14.1602 19.4522 14.2502 19.192 14.25L19.1925 13.5V14.25H19.192H7.5C7.08579 14.25 6.75 13.9142 6.75 13.5C6.75 13.0858 7.08579 12.75 7.5 12.75H18.8853L18.8251 13.0514L18.825 13.0515L19.1928 13.1251L19.1928 13.1251L19.5605 13.1986L19.1928 13.125L19.1925 13.1249L18.8251 13.0514C18.8421 12.9664 18.888 12.8898 18.9551 12.8349C19.0221 12.7801 19.106 12.7501 19.1925 12.75H18.8853L20.0853 6.75H20.5425C20.4872 6.74996 20.4325 6.73768 20.3825 6.71403C20.3323 6.69031 20.288 6.65574 20.2528 6.61283C20.2176 6.56991 20.1924 6.51972 20.1789 6.46586C20.1655 6.41211 20.1642 6.35605 20.175 6.30173L20.0853 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H20.5423C20.5422 5.25 20.5421 5.25 20.542 5.25L20.5425 6V5.25Z"
                                              fill="#0F172A"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className={"header-actions-item"}>
                                <button className={"header-actions__burger"} onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M3 7.5C3 7.08579 3.33579 6.75 3.75 6.75H20.25C20.6642 6.75 21 7.08579 21 7.5C21 7.91421 20.6642 8.25 20.25 8.25H3.75C3.33579 8.25 3 7.91421 3 7.5Z"
                                              fill="#0F172A"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                                              fill="#0F172A"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M3 16.5C3 16.0858 3.33579 15.75 3.75 15.75H20.25C20.6642 15.75 21 16.0858 21 16.5C21 16.9142 20.6642 17.25 20.25 17.25H3.75C3.33579 17.25 3 16.9142 3 16.5Z"
                                              fill="#0F172A"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;