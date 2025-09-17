import React from 'react'
// import s1_1 from "../../../../public/arts/serries1/img1.jpeg"
import s1_2 from "../../../../public/arts/serries1/img2.jpeg"
import s1_3 from "../../../../public/arts/serries1/img3.jpeg"
import s1_4 from "../../../../public/arts/serries1/img4.jpeg"
import s1_5 from "../../../../public/arts/serries1/img5.jpeg"

import media2_1 from "../../../../public/media/necat forging ahead episode 7 staff.jpeg"
import media2_3 from "../../../../public/media/necat forging ahead episode 7 julia tong and painting.jpeg"
import media2_2 from "../../../../public/media/necat forging ahead episode 7 julia tong_ israel garcia_ asia pyron_ jami anderson_ and painting of kristoff.jpg"

import media3_1 from "../../../../public/media/Coop gallery_Julia Tong_this fairy is allergic to the sun.jpg"
import media3_2 from "../../../../public/media/necat forging ahead episode 7 staff.jpeg"
import media3_3 from "../../../../public/media/international artists exhibition 2024_metro arts centennial arts center_julia tong.jpg"


import media4_1 from "../../../../public/media/The White Snake_The Meeting_Julia Tong.png"
import media4_2 from "../../../../public/media/The White Snake_The Longing_Julia Tong.png"
import media4_3 from "../../../../public/media/The White Snake_The Fight_Julia Tong.png"
import media4_4 from "../../../../public/media/Silent treatment 1_julia tong.jpg"
import media4_5 from "../../../../public/media/silent treatment 2_Julia Tong.jpg"

import media5_1 from "../../../../public/arts/serries5/img6.jpeg"
import EventMedia from '@/components/Pages/EventMedia/EventMedia'
import { StaticImageData } from 'next/image'

import media2 from "../../../../public/media/media-2.png"

export type subType = {
    id: number,
    title: string,
    subtitle?: string,
    timeLine: string,
    details: string[],
    arts: {
        id: number,
        img: StaticImageData,
    }[],
    video?: string
}

type Roottype = {
    id: number,
    sectionName: string,
    sectionttile: string,
    datas: subType[]
}

export const data: Roottype[] = [
    {
        id: 1,
        sectionName: "Events",
        sectionttile: "Stay updated with every event happening here.",
        datas: [
            {
                id: 1,
                title: "The Nashville Fair, Nashville",
                timeLine: "September 5-September 14, 2025",
                details: ["During the 2025 Nashville Fair, I had the opportunity to serve as the performing artist, creating plein air paintings of animals for one hour each day. Each session resulted in a completed 18” x 24” artwork. As an animal lover, this experience was profoundly fulfilling — not only did I study the anatomy and presence of the animals, but I also learned about their lifestyles and care from their breeders. Many of these animals were show animals, cherished as the pride and joy of their owners.", "Equally meaningful was the chance to share this process with others. I taught many children and adults how to paint, guiding them in plein air techniques and helping them capture the character of animals. Seeing their excitement and curiosity lit up my heart and affirmed my belief in the importance of art education as part of community life."],
                arts: [
                    // {
                    //     id: 1,
                    //     img: s1_1
                    // },
                    {
                        id: 2,
                        img: s1_2
                    },
                    {
                        id: 3,
                        img: s1_3
                    },
                    {
                        id: 4,
                        img: s1_4
                    },
                    {
                        id: 5,
                        img: s1_5
                    },
                ],
            },

        ]
    },

    {
        id: 2,
        sectionName: "Media",
        sectionttile: "Stay informed with latest news and media.",
        datas: [
            {
                id: 1,
                title: "Channel 5 news",
                timeLine: "6 pm, September 10, 2025.",
                details: ["I was featured on Nashville’s News Channel 5, where I demonstrated my live painting process by completing a portrait of Loki the pig at the Nashville Fair within an hour. During the segment, I was honored to share both my artistic practice and professional journey, while also expressing my deep love for animals — a theme that continues to inspire much of my work. This experience allowed me to connect with a broader audience and highlight the joy and fulfillment I find in painting animals from life."],
                arts: [
                    {
                        id: 4,
                        img: s1_3,
                    }
                ],
                video: "/media/loki the pig painted by julia tong.mov"
            },
            {
                id: 2,
                title: "NECAT Network",
                timeLine: "Forging Ahead, Episode 7, 2025.",
                details: [
                    "I had the honor of appearing on a live television segment with Nashville’s NECAT Network, where I completed a painting of Kristoff, my favorite goat from the Nashville Zoo, within the 90-minute broadcast. Kristoff’s calm and loving spirit has long inspired my work, and capturing him live on camera was both a joyful and challenging experience.",

                    "The segment also included an interview, where I was featured alongside three remarkable Nashville artists: Grammy-nominated graphic designer Jami Anderson; filmmaker Israel Garcia, known for creating Jelly Roll’s music video Echoes (ft. CookUp Boss); and choreographer Asia Pyron, director and founder of PyDance. Sharing this platform with such talented creatives was an incredible honor, and the experience deepened my appreciation for Nashville’s vibrant and diverse artistic community."
                ],
                arts: [
                    {
                        id: 1,
                        img: media2_1,
                    },
                    {
                        id: 2,
                        img: media2_2,
                    },
                    {
                        id: 3,
                        img: media2_3,
                    },
                ],
            },

        ]
    },

    {
        id: 3,
        sectionName: "Exhibition",
        sectionttile: "Discover the latest trends and creativity here.",
        datas: [
            {
                id: 1,
                title: "Coop Gallery, Nashville",
                timeLine: "March 28, 2025",
                details: ["My artwork This Fairy is Allergic to the Sun was selected for Coop Gallery’s Flat File Project. It was exhibited during the opening show and then housed in the gallery’s flat file collection for one year. It was an honor to have my work included alongside many talented Nashville artists."],
                arts: [
                    {
                        id: 1,
                        img: media3_1,
                    }
                ],
            },
            {
                id: 2,
                title: "Soho House, Nashville",
                timeLine: "January 4, 2025",
                details: [
                    "I had the honor of exhibiting a selection of my works at Soho House, an inspiring experience of sharing art with a community of like-minded creatives and collectors. The exhibition featured pieces from The Grief Series, The Recovery Series, The Fairy is Allergic to the Sun, The Sun Forest Dragon, The Seasons Series, along with several additional paintings not yet featured on my website. I am deeply grateful to Soho House for showcasing my work and fostering such a meaningful space for artistic dialogue.",
                ],
                arts: [
                    {
                        id: 1,
                        img: media2,
                    },
                ],
                video: "/media/soho house artist showcase.mov"
            },
            {
                id: 2,
                title: "Metro Parks Centennial Art Center",
                timeLine: "October 4, 2024.",
                details: [
                    "I was honored to be included in the 2024 Annual International Artist Exhibition at Nashville’s Centennial Art Center, where I displayed three paintings: The Sun Forest Dragon, The Fairy is Allergic to the Sun, and This Man is Turning Into the Tree (currently undergoing revisions and not yet featured on my website). The exhibition brought together many international artists based in Nashville, creating a vibrant and diverse showcase. As part of the event, each artist contributed food from their culture to a communal potluck, making the exhibition not only visually rich but also an exceptional and immersive cultural experience.",
                ],
                arts: [
                    {
                        id: 1,
                        img: media3_3,
                    },
                ]
            },

        ]
    },

    {
        id: 4,
        sectionName: "Workshop",
        sectionttile: "Explore fresh ideas and hands-on experiences.",
        datas: [
            {
                id: 1,
                title: "Soho House, Nashville",
                subtitle: "Year of the Snake, Lunar New Year Workshop",
                timeLine: "January 28, 2025.",
                details: ["To respect member privacy, no photographs of the workshop are shared here; however, the digital art prints and an artwork I created with Chinese paper cutting are featured. During this workshop, I introduced the classic Chinese love folklore of the White Snake, exploring its themes of women’s empowerment, traditional transgender culture, love through the lens of Chinese society, and Buddhism’s tension with folk traditions. I also taught attendees the art of Chinese paper cutting, sharing a technique I developed to break bad habits and create new patterns symbolically. Participants cut their designs, glued them onto paper, painted a habit they wished to release, and then gently peeled the paper, leaving behind a unique artwork that embodied transformation. To deepen the experience, I performed a traditional Chinese tea ceremony, creating space for cultural, linguistic, and historical connections with attendees."],
                arts: [
                    // {
                    //     id: 1,
                    //     img: media4_1,
                    // },
                    // {
                    //     id: 2,
                    //     img: media4_2,
                    // },
                    // {
                    //     id: 3,
                    //     img: media4_3,
                    // },
                    {
                        id: 4,
                        img: media4_4,
                    },
                    {
                        id: 5,
                        img: media4_5,
                    },
                ],
            },
            {
                id: 2,
                title: "Soho House, Nashville",
                subtitle: "Year of the Dragon, Lunar New Year Workshop",
                timeLine: "February 10, 2024",
                details: ["To respect member privacy, no photographs of the workshop are shared here; however, the communal painting created during that time, The Sun Forest Dragon, is included. In this workshop, I introduced the architectural history of dragon symbols in ancient China and collaborated with attendees to create a collective artwork. Inspired by the Chinese zodiac, where the Year of the Sun Forest Dragon represents manifestation, I invited participants to paint their own wishes and intentions directly onto the piece, transforming the dragon into a vessel of shared blessings. Drawing on my bilingual skills and knowledge of classical Chinese, I also gifted each attendee a Chinese name as a personal blessing, continuing a tradition of cultural exchange and goodwill."],
                arts: [
                    {
                        id: 1,
                        img: media5_1,
                    }
                ],
            },
        ]
    },

]

function EventMediapage() {

    return (
        <div className='relative'>
            {/* ------------------for navbar------------- */}
            <div className='bg-[#151515] absolute top-0 left-0 w-full h-[78px]'>
            </div>
            {/* -------------for conteent---------------- */}
            <div className='min-h-screen bg-[#191B1B]'>
                <div className='container pt-[78px]'>
                    <EventMedia />
                </div>
            </div>
        </div>
    )
}

export default EventMediapage