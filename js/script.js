console.log('Script loaded');

const products = [
    { name: "Baxter of California Clay Pomade Firm Hold / Matte Finish Hair Pomade for Men", image: "https://m.media-amazon.com/images/I/61c-zCXWQaL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.com/Baxter-California-Perfect-Texturizing-Straight/dp/B000MIKEZQ?crid=2SJYOD098R75U&dib=eyJ2IjoiMSJ9.tNxi0sjA-LzNmOvjhzbBPoKVp-Rh7lY4D9mLr6L0rnhJwVbhhYsN3Owpod99RGTOFJqkaHPy6SeKcAIlnJHwP98Oa8vvxciKP1E4DuvIbd8lDR2LNEpqIPdO4l0Um2Cui9Fxb509KL_BP6Nwpj1chfIh44FAV2RopkAGJxLwUw1x99fjJYFwPZv6JTepNiLhpvzy8mFQUYw6_YE8fyEfRejQc8EhIIToAMYrrFYbxVxy9WKK5TD13j9FW80V1Bxexk6wwWZbQuqufoBLv9hY0qYSl9tpgc_gKR-81ATCkS9gZUyc4fuzgaDB0YTzUAVvpyhmbhJG-UUwqn-9OUIOYcNps_5wUxyGIR_TJG8FSyGJpE0WtOSieLxwME02Xt_ts_YnkKKbVKUQXVIp7rdLk5OvmIK2tlQUluz-SjORbfcI83Kf7oYYMnPt7gFlpTVm.7zg8KjBiPcloWr0U6VKUbtBrgGFTorrm0PqCJnMVl90&dib_tag=se&keywords=Baxter+of+California+Clay+Pomade%2C+Acqua+di+Parma+Barbiere+Styling+Cream&qid=1742580019&sprefix=baxter+of+california+clay+pomade%2C+acqua+di+parma+barbiere+styling+cream%2Caps%2C654&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=be76ead3fe2e77a4e09b5b1fd023bb0c&language=en_US&ref_=as_li_ss_tl" },

    { name: "Armani Beauty - Acqua di Giò Profondo", image: "https://5.imimg.com/data5/SELLER/Default/2022/11/YC/PG/DY/56713740/giorgio-armani-acqua-di-gio-profondo-eau-de-parfum-500x500.jpg", link: "https://www.amazon.com/Armani-Beauty-Fragrance-Everlasting-Patchouli/dp/B0DBRCJVDV?crid=3QGINTKSP5H6U&dib=eyJ2IjoiMSJ9.aqvEZbSaIx46UfOwxQF8qEt1x74XKrGrGULZf4nv3doe670RwhL9ApUZE2ULuiJFF3hPjeW4ycBQi53p2shGf7pjDT6a2Yph7bXXRYHxtNDvKDz1dMITX2GrkJx1ZCuoNkVGANQGXeGkCVbCMtvSoX8OtSFHjEG5ZZVTHKVpzz_9e_1fKfyVhAgSLbI2o9SifuqCulCpP1rx0pVmIlNZpCQ63B3qH6VWYassjVh8C-PptdvIqkjnlgB_ULSDGa_vxa1-17krSFT7U2fo8iYftieQNspl0DiiZB937wMIwvc.iWPZapaw_jDxxi2Gq9XGnw1dmDvGpsdopg9Q8QRTY8g&dib_tag=se&keywords=Acqua%2Bdi%2BParma%2BColonia&qid=1742579862&sprefix=acqua%2Bdi%2Bparma%2Bcolonia%2Caps%2C697&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=fitfamgoalss-20&linkId=4e6056225261d0271cbc0c1949a326ea&language=en_US&ref_=as_li_ss_tl" },

    { name: "Lab Series Max LS Anti-Age Cream", image: "https://m.media-amazon.com/images/I/61P41GvqQwL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.com/Lab-Anti-Age-Max-Cream-1-7/dp/B07KLZKG9J?dib=eyJ2IjoiMSJ9.4CYbk7EBhkpb_GijzfJh4XhNqIdHOTDKQVKsml8AQXFYQRdSYcFtzsjlpf02b6se-EDxeWvs8AzoOZo_0r2qiLavcgerd2oRBHWQvIom8mUUYrvLPPzmb3bOsH_sVM8FsX2gpNsgB11_YSow1_sOY4QopTcMkkAhmck10UbF4DMzjbfvHLyBmEt_iknUwZ42jc4l9SiNkTw98bhR3WmO_BP-aCreORjUg-6bhwnmGGpyTkvsr0xsQ8jIZEc-CHCAhIXfkqmCdklq_XRSjVRGKk-W3TUM0DEVzW6xnciUxNo.z8MVS_ZjEmlSBACuu2uJg2Vbv-rsxDDXaB0RQ771t48&dib_tag=se&keywords=kiehl%27s+moisturizer&qid=1742579599&sr=8-5-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=fitfamgoalss-20&linkId=6efef2142358daa8d1ed37822ef9ae79&language=en_US&ref_=as_li_ss_tl" },

    { name: "Kiehl's Ultra Facial Cream", image: "https://m.media-amazon.com/images/I/61271b8GniL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.com/Kiehls-Strengthen-Long-Lasting-Hydration-Fast-Absorbing/dp/B00C6SV33M?crid=2HJHL5Z9P44W&dib=eyJ2IjoiMSJ9.4CYbk7EBhkpb_GijzfJh4XhNqIdHOTDKQVKsml8AQXFYQRdSYcFtzsjlpf02b6se-EDxeWvs8AzoOZo_0r2qiPxLV3Fh0dIT-CFp0fwDb4i5FJFqmCDFbL9kny5uuBhqsX2gpNsgB11_YSow1_sOY4QopTcMkkAhmck10UbF4DMzjbfvHLyBmEt_iknUwZ42jc4l9SiNkTw98bhR3WmO_BP-aCreORjUg-6bhwnmGGpyTkvsr0xsQ8jIZEc-CHCAhIXfkqmCdklq_XRSjVRGKhBAB_RTzVdbLx7qCpiWJe8g5mU_YiMgwAzjv1eprj0P-N0wQwtWTuMbykHI38qPMOeizl0hDxN2V81-rvu8MdmPyILaSKvGhxN_Zp23cd_8T1PuiOhfdJod4foEo221v1e_8vmkN5hUbRCTYjBcva99lqJtR1v4kSUelZPSmJII.8HltmrZFo9c6Ve6MwjkQTCuYyAUPXQkUCHIb7hevLXo&dib_tag=se&keywords=kiehl%27s%2Bmoisturizer&qid=1742579459&sprefix=%2Caps%2C569&sr=8-6&th=1&linkCode=ll1&tag=fitfamgoalss-20&linkId=8b2bc60a70046c54d57fce54d9debfe4&language=en_US&ref_=as_li_ss_tl" },

    { name: "La Mer The Moisturizing Soft Lotion", image: "https://www.godwell.com.hk/api/image/t1920/e171f1416b89b15c58f422671023f73d99966e4862d91d0552e4d27aec24fc17.jpg", link: "https://www.amazon.com/Mer-Moisturizing-Soft-Lotion/dp/B01HTZJWNY?crid=NNY7AO17VXY0&dib=eyJ2IjoiMSJ9.Ar0NP703A1ZaWgdxbSVvpgBMePf-Sv7qW6IyWH2GyZeGcpuk8qcLcMFTGpLH9TMjoi6ygsvG5xov8zr3Ww88ucNBCaa-ZPiHKXgv7NiOPGVdJF882LK4zHih4_F4EpfoiYHCSd0v-I7qFq9RH7bWWDvRctrb8A52mTkFzIL89ZVSfyYPsI0j1FTSheDFBVFW6c8w6pDSvFlXvLaAaEfBWvSb3lwGUMx9K7upQz5xZNZ_As80u3AZSNwgK9gh68FIa5vlmE747rJ-aPbPOmTm5Ww7DsSaAgeLqgWhdYxmhf9OItevKUvLcQp8t2jC8_sMAkxKKQ2YgYlzUlxgaCphX673Tbn_kPepYECkapstqMTo_74sKOIq2QYMGmWLJqgPLntn1c_1eqMtuPs6vrHJoeOZSKYRWsTDpq5WSBBfi9Ge98Gy_Jcgu-gQ7hYXjmmM.5y4j5tGiGmvsAV_yLPYdumVuYTTWry9sJhICML-Tcek&dib_tag=se&keywords=a+Mer+The+Moisturizing+Matte+Lotion&qid=1742577607&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=a+mer+the+moisturizing+matte+lotion%2Caps%2C333&sr=8-7&linkCode=ll1&tag=fitfamgoalss-20&linkId=b753d3c4e21c2ab29ac3cdf6ced3f8b8&language=en_US&ref_=as_li_ss_tl" },

    { name: "La Mer The Treatment Lotion for Unisex 5oz", image: "https://m.media-amazon.com/images/I/6107cHdU3xL.jpg", link: "https://www.amazon.com/Mer-Treatment-Lotion-Unisex-5oz/dp/B00F5CSPUU?crid=2BR693PTUC67&dib=eyJ2IjoiMSJ9.Ar0NP703A1ZaWgdxbSVvpgBMePf-Sv7qW6IyWH2GyZeGcpuk8qcLcMFTGpLH9TMjoi6ygsvG5xov8zr3Ww88ucNBCaa-ZPiHKXgv7NiOPGVdJF882LK4zHih4_F4EpfoiYHCSd0v-I7qFq9RH7bWWDvRctrb8A52mTkFzIL89ZVSfyYPsI0j1FTSheDFBVFW6mE9oNRuP94CXfk0qmIdfDz6uOVtP6rOcKsC3oMmPGZ_As80u3AZSNwgK9gh68FIa5vlmE747rJ-aPbPOmTm5Ww7DsSaAgeLqgWhdYxmhf9OItevKUvLcQp8t2jC8_sMAkxKKQ2YgYlzUlxgaCphX673Tbn_kPepYECkapstqMTo_74sKOIq2QYMGmWLJqgPLntn1c_1eqMtuPs6vrHJoeOZSKYRWsTDpq5WSBBfi9Ge98Gy_Jcgu-gQ7hYXjmmM.xw8kM7YcU4XBqu6Qfih8O5FLk5Uzs9sf4QUSCwQzpYM&dib_tag=se&keywords=a+mer+the+moisturizing+matte+lotion&qid=1742578160&sprefix=%2Caps%2C334&sr=8-8&linkCode=ll1&tag=fitfamgoalss-20&linkId=d1f89323378338057f0ebe4fb27dab3c&language=en_US&ref_=as_li_ss_tl" },

    { name: "Kiehl's Age Defender Face Cream Moisturizer with Capryloyl Salicylic Acid & Caffeine", image: "https://m.media-amazon.com/images/I/71s-UkxclUL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.com/Kiehls-Moisturizer-Anti-Aging-Treatment-Exfoliates/dp/B01MSP3R2W?_encoding=UTF8&pd_rd_w=mTaHs&content-id=amzn1.sym.a602a706-e4fe-481e-98c3-9b75060fd322%3Aamzn1.symc.abfa8731-fff2-4177-9d31-bf48857c2263&pf_rd_p=a602a706-e4fe-481e-98c3-9b75060fd322&pf_rd_r=QZPA48N55GAY2TK34895&pd_rd_wg=e54c7&pd_rd_r=b8515423-b4f6-4922-a8a7-b581254da588&th=1&linkCode=ll1&tag=fitfamgoalss-20&linkId=a2d9691046a6f26a637d529f618a4148&language=en_US&ref_=as_li_ss_tl" },
    
    { name: "Lancôme Tonique Confort Hydrating Face Toner", image: "https://m.media-amazon.com/images/I/41RdXqOtQTL.jpg", link: "https://www.amazon.com/Lancome-Tonique-Confort-Rehydrating-6-7-Ounce/dp/B002CD2OF2?crid=1B0EUQUDNO3ND&dib=eyJ2IjoiMSJ9.aZyehnrk83ex3kYTW8QvhqCD_Jw1284GbpRjYHhTTYH7YOf71R6dD4ND21ndRzuJmK47mBGLw01EGudYz3VR_iE1KY28z26dcFWqSZOsXsOU2gtguoRvwWSZcYR_Xl2XHPpOmwrbMRKyUtuGtWVssD_lXvxATbDu3L5Q4Hh_k1HqwMWObrYM4pm0-dStIHuZuK7vuLTW4XsK13PcLSnBd_NCDn9JlvvopgRtvzaIgzLe4A0ZlLa02kZaNbRV6rTyy1EAY1FcHSQEGEvbmdnmKv2Jw80vWpD03YckylCvQy0.8qzxC8yJ0ir09wlmsA7wOTUH5ImEaCWrTtZKj8a0Tgo&dib_tag=se&keywords=Lanc%C3%B4me+Tonique+Confort+Hydrating+Face+Toner&qid=1729146056&sprefix=saint+jane+sunscreen%2Caps%2C1089&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=f7b0cbcb1f86aac88b438bb4854f6bf6&language=en_US&ref_=as_li_ss_tl" },
    
    { name: "Kate Somerville ExfoliKate Cleanser – Daily Exfoliating Foaming Face Wash", image: "https://www.katesomerville.com/cdn/shop/files/10245_overview1.jpg?v=1707339855&width=1920", link: "https://www.amazon.com/Kate-Somerville-ExfoliKate-Cleanser-Foaming/dp/B01DV9CWIE?crid=2GCMX2HH6DFEF&dib=eyJ2IjoiMSJ9.moCa74Eirrr434Fhm1enGI34axFxGih5xYUav7f_HXLQncMpHtV_UEZUwg_ckNFO-EmYCt0FPJ0iovQ8u1QF5A.HEb3nggNgl8Qpv8f8Thl-dzOVOcXmB487Hz5LDOXAkA&dib_tag=se&keywords=Kate+Somerville+ExfoliKate+Cleanser+%E2%80%93+Daily+Exfoliating+Foaming+Face+Wash&qid=1729146256&sprefix=kate+somerville+exfolikate+cleanser+daily+exfoliating+foaming+face+wash%2Caps%2C368&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=AF8JB7QQR30L3&linkCode=ll1&tag=fitfamgoalss-20&linkId=4de66785c0011428048311e4f9088566&language=en_US&ref_=as_li_ss_tl" },
    
    { name: "Medicube Age-R Booster H - Korean No.1 Skin Care Device", image: "https://m.media-amazon.com/images/I/517nywFbO5L.jpg", link: "https://www.amazon.com/Medicube-Age-R-Booster-H/dp/B0BDCRFB9T?crid=1C02IGEBKK1WK&dib=eyJ2IjoiMSJ9.-IvCEJxufOI4_dbDPU5R5itpkscok_-WNk0JhGQnKESmHTBIBiC-FXEhAwNVw4edT5BRXVoU4evCEDi9M72uMRdISyu0p-vba4U0cbocmB7sV3YZ7O5oL099WGvIMebT-hs-d24AM0Ef-elYhi9_FlvLo_PPxO2Y8pu9Oa5bGnYulOeYIDD6JNER1xfXeNT-109Ox1419_5seH5gkgzYTgN2k6DePM-rhmATVHKEWQRfihFgc9mslfaRdqXFj3ofTCK6VeDAHOQH5VJCxL-YgttMrlxzXYSXg0ZcLB1oOtM.A625ulRuo-iXE8cvvn0y4fnSYVGsy3VF4yQVkCJs9A0&dib_tag=se&keywords=Medicube+Age-R+Booster+H+-+Korean+No.1+Skin+Care+Device&qid=1729146488&sprefix=medicube+age-r+booster+h+-+korean+no.1+skin+care+device%2Caps%2C329&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=b255778389da7417d43f3ef3df93dfc8&language=en_US&ref_=as_li_ss_tl" },

    { name: "Medicube Collagen Jelly Cream- Freeze Dried Hydrolyzed Collagen ", image: "https://dermarolleronlinestore.co.za/wp-content/uploads/2024/09/Medicube-Collagen-Jelly-Cream-4.jpeg", link: "https://www.amazon.com/Medicube-Collagen-Niacinamide-Freeze-Dried-Hydrolyzed/dp/B0CM2PPNMW?dib=eyJ2IjoiMSJ9.MGiOgI8Z08P8A2q-bCbe3gjZwaPucUOYymUMmd08HcjjgiTrozUAdT4E0DSMepb1uHq5yZchcmO35oHQhhl4iYAE9rM3nTH5_-_UZa2Yd6e5npq2mKvnQ2-3RYIVEiMBCzxFJuY_efqN5yDPqSKk-v3fdWdFVp9YQnjZzVNdL3hnOy_30wSzC2ppsVS1NnjZSGk3bgSVy2eq8DI3-xgi3JCEFEpV8yGuhY2Gxc7iYpLpsZCSFhBLqYjfhY68FvD2uKyVR2INkhC2OyJt2xc1SNQPWXrKPltVjtRjL6f4sk4.eBpb3ftWPFzj3KOaqRN-KjhxzKZIG7G4l0EtCjOhBpA&dib_tag=se&keywords=medicube+collagen+jelly+cream&qid=1729146644&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=f268521b6680d9560c47d0982f09739a&language=en_US&ref_=as_li_ss_tl" },

    { name: "Medicube Triple Collagen Hydrating & Firming Moisturizer ", image: "https://m.media-amazon.com/images/I/61VKfsrra0L.jpg", link: "https://www.amazon.com/Medicube-Triple-Collagen-Cream-Moisturizer/dp/B0BPXT3GBN?crid=HDZ89SQ2VFO6&dib=eyJ2IjoiMSJ9.9pthOLBlWslhva5TNKRA8NM0H5Vjg0UlMEo8p1fHGQqqWHLm7LCCeaIyn-m9qOPvPG-ojxy2U4FtE-u6wMyQDl7qLFAztKhDyW2tTZoBkkLsC2GCTCX-orIvuhMgjJc7yp_C-icOZ0vhfXdAzgvuL2DsFmmouJwUxbpTgBl7g5sIKhC8_xdKwg1-K1biXx_D1bZYuTj7LTXpF1rCu7vNJ9sKpCvNZnRaOyZpChojrNo18Z66KP7nLY3YJzAbguHw1zuImEnKuY7m8WiMZOtA6kcswzGYe2-RJC0rxWML77E.OeXFxcp-48kYZfGvreueP4INmm1uHK9glurAyN1nG8U&dib_tag=se&keywords=Medicube+Triple+Collagen+Hydrating+%26+Firming+Moisturizer&qid=1729146872&sprefix=medicube+collagen+jelly+cream%2Caps%2C556&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=3d57d5e333877ee991c4159ab11b591e&language=en_US&ref_=as_li_ss_tl" },

    { name: "LOMA Nourishing Shampoo 33 Ounce 1 (Liter)", image: "https://m.media-amazon.com/images/I/416htvknvCL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.com/Loma-Nourishing-Shampoo-33-8-Ounce/dp/B00QKY2QWU?crid=17DU5UMS9X500&dib=eyJ2IjoiMSJ9.pO2RrEf3lZf6PZ-S5OSwvkSym6xY7TXBKN_Hnz0Mh2tgR2vL7mafYS6OF6Lk_DBP-1j7MWrSRx7-IPT3MCi5luTyyq1MZnm0aytUBJEjWIdYaC9FZDVmzpvEL52x8aTBQjslETlfyWJUC62z4IqLG6Mlwktyj7HifyggPomKDNpD-Evc3fNU9ib3mP-wtpoCnwWOI9qi_ouhBiMfl262RqFDBqQFuJ2k2aSWcaRdpNNgNgC-J01C4C3d6QV1oqE9Y9MEaNOBNyUopvZzyYSrOLoCldLYlpyO7Utg9wJBWQ8.BBoXYiBUvqafLI5o_-qNyA1gTu_wG4_wOOolA0PbJuc&dib_tag=se&keywords=LOMA+Nourishing+Shampoo+33+Ounce+%28Liter%29&qid=1729147001&sprefix=loma+nourishing+shampoo+33+ounce+liter+%2Caps%2C335&sr=8-5&linkCode=ll1&tag=fitfamgoalss-20&linkId=4f3b1dc389fc7a5a8212fa9116bab7c4&language=en_US&ref_=as_li_ss_tl" },

    { name: "LOMA Nourishing Conditioner 33 Ounce 1 (Liter)", image: "https://lomabeauty.us/cdn/shop/files/LOMA_moisturizing-shampoo_33oz.jpg?v=1711031978&width=1214", link: "https://www.amazon.com/Loma-Moisturizing-Shampoo-33-8-Fl/dp/B00BFW95F8?crid=13KO8YC6RY08I&dib=eyJ2IjoiMSJ9.XpMBVXovn8ktJiDlCKdV8kYPqyUvlKxTkophO4JyiJ3MiBz9eXqodwz6WBl5NoBVoAgyu9afwte8_YXO7RiPQplVf8bVzwazo9MIhJ16249ZP6IDIIF1UQwyxvklqP9mMwnehP1bNY2UbhBLuyWm_HO0v7xKtAanE20oSvsiL1PNrfmxMl-coEbuol8RsS36gJvMNX-WxVtR3UVZPUX-D8IaFP8uo7G4RjzgMeIWzbiL1k0pFZO1C-V4fWlzwa1JQyCdfvmPy5NNEz0h08WMPbVnazylS4yvyXeAKheQj5w.Tqr_wkkMNJIN3NUZYXm8gObJZ8klH-CEmx6jarwhPj4&dib_tag=se&keywords=loma+moisturizing+shampoo&qid=1729147513&sprefix=LOMA+MO%2Caps%2C557&sr=8-5&linkCode=ll1&tag=fitfamgoalss-20&linkId=b32d1d27c3291e2daf4e76bb7a2a826e&language=en_US&ref_=as_li_ss_tl" },

    { name: "L'Oreal Professionnel Metal Detox Hair Mask", image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//l/-/l-oreal-professionnel-serie-expert-metal-detox-mask-250ml.jpg", link: "https://www.amazon.com/Professionnel-Conditioner-Treatment-Prolongs-Sulfate-Free/dp/B09716YCGX?crid=28KIYOU04W89E&dib=eyJ2IjoiMSJ9.OphJllzUW6LpZs2s6jM-t_mEq6Zx_UfmwjodMXgc0m8Zn_XtlZcm33AvFYpTZlL9S22TNFkp4btD6LPJKp5OOMJizpGLbxq4suvfH8GlwCEkKF3CtWok9xVqTK83SL118_lZJ-AJOhFA2Y_5WJShzlR8cDbcvD7In9pOb38SFIkd-zU_kJp7wRJAHBXa8Ua--ZDn3vfcOfRwjEiyt1-h8-bH-A8NtXP-yusNO5zQoYyqKBy552Tm2wcOzjNf-TdQU42b5GJHZdc9fJOraOyHneU6SEMkd1-RVCAuS6gmBWU.rBh9qTw9TxXkd_ZHmLiryNqRiBtuSa6sALr8l57k4us&dib_tag=se&keywords=L%27Oreal+Professionnel+Metal+Detox+Hair+Mask&qid=1729147726&sprefix=l%27oreal+professionnel+metal+detox+hair+mask%2Caps%2C465&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=c1462a08d2b5ae92062389f36b68b66c&language=en_US&ref_=as_li_ss_tl" },

    { name: "VEGAMOUR GRO Hair Serum, Get Thicker, Fuller Looking Hair In As Soon As 90 Days", image: "https://i5.walmartimages.com/asr/0b263cd2-044e-491d-8eb5-93b48f754170.174e33cb2b996565e053903edf31c55c.jpeg", link: "https://www.amazon.com/VEGAMOUR-Serum-Thicker-Visibly-Longer/dp/B08KYM3Y6T?crid=3LF15NSBGLVVF&dib=eyJ2IjoiMSJ9.kFFvHNkBSqJ5i31mhyGcb3oscvnwyTlgOJAuZxIFhZ0SQtpr5Mfcf2gEixVETtquBQNDtCV7a_22uTcbc2Rb1arZXdxGy4rkLhxGkwPi0HyIhJOeqkuQ2Rd5YiIccJiO8MudLVxtajnGQrYuD92ZmtT0lZjZUX6xDPqznXHvYtfUJbIlRhmVCpM0tIVY3Emiz1rQHkFU1svvFWdIHF9qd00X2h-Jw-sorh2L1qs0Bf5iFpe_TZBYBllj3cVlGZFRetYHQViSUCjznvGF_UiWnn00dtUyn3-QX0dX8gq7rn4.42Rp-gmP3F6zTc6HG--syw9K1AXheXqAZOGGQ0eh3B4&dib_tag=se&keywords=VEGAMOUR+GRO+Hair+Serum%2C+Get+Thicker%2C+Fuller+Looking+Hair+In+As+Soon+As+90+Days%2C+Doesn%27t+Make+Hair+Feel+Oily%2C+Bergamot+Scent%2C+1+fl.+oz.&qid=1729147800&sprefix=vegamour+gro+hair+serum%2C+get+thicker%2C+fuller+looking+hair+in+as+soon+as+90+days%2C+doesn%27t+make+hair+feel+oily%2C+bergamot+scent%2C+1+fl.+oz.%2Caps%2C406&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=89bb45ede8c05594c6b3bf06f2e17293&language=en_US&ref_=as_li_ss_tl" },

    { name: "Viktor&Rolf - Flowerbomb Eau de Parfum - Women's Perfume", image: "https://m.media-amazon.com/images/I/61DVU6YNyGL._AC_UF1000,1000_QL80_.jpg", link: "https://www.amazon.com/Flowerbomb-Viktor-Rolf-Women-Spray/dp/B0010VY4HI?crid=3FIPRF4Z2NGV3&dib=eyJ2IjoiMSJ9.cZlm45XY08zdqXIGKxy9hSCN2squ37ykzIVK5fCamwZgYtwlTCWIhctdiUFjKhJpeUuj61osDiB0Lu4_0rWjIuXsKjc-3fwFB0MpzojLrvvPAI8CQAFPUd0DmxVV-KOUR7Lgn0zXWQ_cWwrY1pScttcrVEHW5ZDCSvA8BWXXk09m7iKDqcv2fozkjkrB--BbN74WV1SZtIF7EUy1p0NGfxymlcJ-uSxg7S9rKjMj3BykNRyI8s3pyALcCg6DH3yrfU7cDq3XSSHfvbvyVglgTuIbd5-UlY_kPO2-221nm_Y.4lFf-7ghcH14BtlRxRaFxMhgMZzMKLrFuRaON1979-E&dib_tag=se&keywords=Viktor%26Rolf+-+Flowerbomb+Eau+de+Parfum+-+Women%27s+Perfume+-+Floral+%26+Woody+-+With+Notes+of+Rose%2C+Peony+%26+Patchouli&qid=1729148296&sprefix=versace+crystal+noir+by+versace+for+women+-+3+fl+oz+edt+spray%2Caps%2C353&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=d8b87fb61d9bea4e872feb40d917400c&language=en_US&ref_=as_li_ss_tl" },

    { name: "No. 5 by Chanel for Women, Eau De Parfum Spray, 3.4 Ounce", image: "https://i5.walmartimages.com/seo/Chanel-No-5-Eau-De-Parfum-Perfume-for-Women-3-4-Oz_960e2ac6-167c-457a-94ce-191c4bd6704b.6d85e072b1826ca1babe78508b914060.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", link: "https://www.amazon.com/Chanel-Women-Parfum-Spray-Ounce/dp/B000VOJ9BG?crid=2C8546QJ73HR1&dib=eyJ2IjoiMSJ9.CJ9gx5tS0Lj5Wqdj9lft1c3cR88cjcOrCkybTQs7yGr1UoB-_aX9wgTYCRFA7PzCGjzfBK9cOoIgEsXB1LlERHRiOR7fvH1z6z7vjMszspZ-irrEaEs4fLzv02eQK-p89gTFi_xcYg_nFlZ8_Qk6anjNOLY8xR0HrjidZW57wTGA72LIohejze5R7VKs3C2d4-Rs42Eqg5MFpE2vL5QpqR8GZxbxEW7250BwFwvVNDp3Wj9C3oYsz4t3vnMSvtewkf2csyTM6fw166QQb5CsJMGoCzD7729eprj_6WwsfEg.3vZ0yTYCltqbjetZZHCEJ8DRrcuIsDzFiLlXD-WzVT8&dib_tag=se&keywords=No.+5+by+Chanel+for+Women%2C+Eau+De+Parfum+Spray%2C+3.4+Ounce&qid=1729148472&sprefix=no.+5+by+chanel+for+women%2C+eau+de+parfum+spray%2C+3.4+ounce%2Caps%2C335&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=afb3839d8a21acd31e5385bd0b24604c&language=en_US&ref_=as_li_ss_tl" },

    { name: "Panasonic ARC5 Palm-Sized Razor", image: "https://shop.panasonic.com/cdn/shop/files/24-0227_ES-PV3A_NonTextCarousels_02_2000x2000_714cf41e-7fc5-42b4-ba7a-fbfd25f54892.jpg?v=1724953102&width=2000", link: "https://www.amazon.com/Panasonic-Palm-Sized-Electric-Handheld-Charging/dp/B0D4TXLD57?crid=36C355XA8D26C&dib=eyJ2IjoiMSJ9.PQJbIE-mJzoERBsTKw3sK4vF-BNQHnSfgMwcymsLUxmFWSE4agqvCwjKK4oWeXk4ciVyeCxQ5csoOEJ_QyzJeh6fLsyURNT-xAVAaCnneNo.asNhlBS1OTHnobRVa4wi0Z77lmWyW9kRnKOY4rsQKeA&dib_tag=se&keywords=bolin%2Bwebb%2Bx1%2Bmatte%2Brazor&qid=1742580294&sprefix=bolin%2Bwebb%2Bx1%2Bmatte%2Brazo%2Caps%2C886&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=fitfamgoalss-20&linkId=7dce35027a0ad668da2f1fd13c230f96&language=en_US&ref_=as_li_ss_tl" },

    { name: "No. 5 by Chanel for Women, Eau De Parfum Spray, 3.4 Ounce", image: "https://i5.walmartimages.com/seo/Chanel-No-5-Eau-De-Parfum-Perfume-for-Women-3-4-Oz_960e2ac6-167c-457a-94ce-191c4bd6704b.6d85e072b1826ca1babe78508b914060.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", link: "https://www.amazon.com/Chanel-Women-Parfum-Spray-Ounce/dp/B000VOJ9BG?crid=2C8546QJ73HR1&dib=eyJ2IjoiMSJ9.CJ9gx5tS0Lj5Wqdj9lft1c3cR88cjcOrCkybTQs7yGr1UoB-_aX9wgTYCRFA7PzCGjzfBK9cOoIgEsXB1LlERHRiOR7fvH1z6z7vjMszspZ-irrEaEs4fLzv02eQK-p89gTFi_xcYg_nFlZ8_Qk6anjNOLY8xR0HrjidZW57wTGA72LIohejze5R7VKs3C2d4-Rs42Eqg5MFpE2vL5QpqR8GZxbxEW7250BwFwvVNDp3Wj9C3oYsz4t3vnMSvtewkf2csyTM6fw166QQb5CsJMGoCzD7729eprj_6WwsfEg.3vZ0yTYCltqbjetZZHCEJ8DRrcuIsDzFiLlXD-WzVT8&dib_tag=se&keywords=No.+5+by+Chanel+for+Women%2C+Eau+De+Parfum+Spray%2C+3.4+Ounce&qid=1729148472&sprefix=no.+5+by+chanel+for+women%2C+eau+de+parfum+spray%2C+3.4+ounce%2Caps%2C335&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=afb3839d8a21acd31e5385bd0b24604c&language=en_US&ref_=as_li_ss_tl" },


    

    { name: "Valentino Valentino Donna Born In Roma EDP Spray Women 3.4 oz", image: "https://m.media-amazon.com/images/I/711fdw0zM3L.jpg", link: "https://www.amazon.com/Valentino-Donna-Born-Roma-100Ml/dp/B07YCLHHB4?crid=2URYK0OWTV3F1&dib=eyJ2IjoiMSJ9.feRhKrz5SogE3m3ofL9AQgCAwcA9bOBjnEbhZ0vpfOTR5Czy4JpHZJH936gTADFvolYagtwNoRfgIiudyaCnmJewBlGdDtV0qI_mt4qAogoxShnMhzPJEt4Gp9WPe8YtxF0tv6QgcA2QG6pQKU1ZtO8cSJAMGY3YAi60diK7Y0l9Qz1ShQaGd-5CMDOwph88xXEqCg8EBj2iFKbscN9sV-6lHPJQErfMqpgmhPOgosm8kB91eaZIuGihge82ZzWmaoEqspSjp6x7XBrw7RpwXqVZT5LOuKY37rnglql1QQs.De6--nPYoDouSKMRwWWbp2pNOLLY9ftDo4b8_bzr65w&dib_tag=se&keywords=Valentino+Valentino+Donna+Born+In+Roma+EDP+Spray+Women+3.4+oz&qid=1729148934&sprefix=valentino+valentino+donna+born+in+roma+edp+spray+women+3.4+oz%2Caps%2C522&sr=8-1&linkCode=ll1&tag=fitfamgoalss-20&linkId=ab06cf39cc43a560784c273d03fed522&language=en_US&ref_=as_li_ss_tl" }

    

    
];

function displayProducts(productsToShow) {
    console.log('Displaying products', productsToShow);
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-card">
                    <a href="${product.link}">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        <div class="p-3">
                            <h5 class="text-white">${product.name}</h5>
                        </div>
                    </a>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filteredProducts;
    
    // Jika search term kosong, tampilkan semua produk
    if (searchTerm === '') {
        filteredProducts = products;
    } else {
        // Filter produk berdasarkan kemiripan dengan searchTerm
        filteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase();
            
            // Produk harus memiliki string pencarian di dalamnya (filter ketat)
            return productName.includes(searchTerm);
        });
        
        // Jika hanya ada satu huruf, filter berdasarkan huruf awal saja
        if (searchTerm.length === 1) {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().startsWith(searchTerm)
            );
        }
        
        // Urutkan produk berdasarkan kemiripan
        filteredProducts.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            
            // Produk yang dimulai dengan searchTerm akan diurutkan lebih dulu
            const aStartsWith = nameA.startsWith(searchTerm);
            const bStartsWith = nameB.startsWith(searchTerm);
            
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            
            // Jika keduanya dimulai dengan searchTerm atau tidak, urutkan berdasarkan panjang nama
            // Nama yang lebih pendek berarti lebih mendekati searchTerm
            return nameA.length - nameB.length;
        });
    }
    
    displayProducts(filteredProducts);
}

// Gunakan input event untuk pencarian real-time
document.getElementById('searchInput').addEventListener('input', searchProducts);

// Tampilkan semua produk saat halaman dimuat
console.log('Calling displayProducts');
displayProducts(products);