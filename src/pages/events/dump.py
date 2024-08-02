import json


wellness_festival_body = '''
Hey SoC Students,

Are you feeling the mid-semester slump? Is your brain starting to feel fried from staring at endless lines of code? If so, don’t panic. We’ve got the antidote for you!

This year, we are introducing Canine Companion: Interacting with Dogs, a collaboration between Student Life Office and Computing Club.

Registration is free for all NUS SoC students!

Please note:
Event is limited to 10-minute timeslot per person. You will be allocated to, and informed about a specific 10-minute timeslot within the window period that the event is conducted.

Do check out some other exciting workshops under SoC Wellness Festival 2024 too😎😎:
- Craft your own Musical Box
- Build your own Air Plant Terrarium
- Embrace Nature with Forest Therapy

Slots are limited so do register your interest at https://forms.office.com/r/4vfPX0aiCF now!
'''

bizcom_league_body = '''
HEY SOC🤓
Recess week is almost here 😋! are you looking for ways to destress?? 😌 AND meet new friends 🥳🥳?

Join us at BIZCOM LEAGUE, and stand a chance to win:
- HaiDiLao vouchers 🍲 - Grab vouchers 🚗
- NTUC vouchers 🍾
- JBL speakers 🔈!
- FREE JERSEYS 👕
anddddd most importantly, IT’s FREE!!!! 🤑


BIZCOM LEAGUE IS BACK AGAIN😱😱🤩🤩 between NUS Computing Club and NUS Bizad Club where you get to make some new Biz friends! (You may sign up in groups of 8 MAX, or even solo!)
All you have to do is sign up and play four sports (basketball🏀 , dodgeball 🤾‍♀️, ultimate frisbee🥏 , captain’s ball 🏐) over the course of two days!

WHEN?
‼️26 Feb 9am - 7pm
‼️27 Feb 9am - 7pm

So WHAT ARE YOU WAITING FOR⁉️SIGN UP NOW‼️ you won’t regret it 🤭
https://nus.campuslabs.com/engage/submitter/form/start/626464
'''

fsc_body = '''
Dates: 19th June - 22nd June 2024

Theme: Harry Potter

FSC is crafted to kickstart your university journey with enduring friendships and unforgettable experiences. Engage in a variety of physical and intellectual games, participate in team bonding exercises, and compete for exciting team and individual prizes. You will also have the opportunity to attend the beach finale event Bash together with your new friends, solidifying your friendships.

Signup links will be released soon! Stay tuned!
'''

fow_body = '''
Dates: 24th July - 27th July 2024

Theme: Teenage Mutant Ninja Turtles

FOW is a 4-day physical orientation camp where seniors help freshmen adapt to different aspects of university life through preparatory talks and team-building activities. Forge lasting friendships as you navigate campus resources and academic challenges together. Look forward to strategic team games that develop you both intellectually and physically.

Signup links will be released soon! Stay tuned!
'''

ffc_body = '''
Dates: 5th August - 7th August 2024

Theme: Elementals: Rediscover your inner element

Abstract: FFC is a 3-day physical summer camp, perfectly tailored for international students gearing up for matriculation closer to August. The camp offers an array of theme-based activities such as flag-building and exhilarating house face-offs. Engage in friendly competition alongside your housemates, strategizing to earn glory for your elemental faction in a series of thrilling challenges. End the camp on a high note with its campfire and barbecue finale under the stars.

Signup links will be released soon! Stay tuned!
'''

bash_body = '''
Event date: 16th August 2024

A fun-filled beach finale event where freshmen and seniors come together to wrap up the entire orientation experience with a night of performances, games, and food. Held at Sentosa Beach, Bash 2024 offers an electrifying atmosphere with DJ sets, inflatable obstacle courses, and much more.

Signup links will be released soon! Stay tuned!
'''

computing_day_body = '''
Computing Day 2024 is a vibrant celebration organized by the NUS Students' Computing Club and the Student Life Office, scheduled for August 14, 2024, at COM3 MPH, NUS. Under the theme "Code & Chill," this event aims to foster community spirit and pride among students, staff, and alumni of the School of Computing (SoC). The day is packed with activities that highlight the computing culture, including a mix of technical showcases and fun-filled engagements like a coding competition, VR gaming, student project exhibits, and traditional carnival games.

The event welcomes all NUS members, focusing on encouraging student involvement and showcasing innovations from various Student Interest Groups (SIGs). Highlights include the opening ceremony with the Dean, a coding competition prize ceremony, and a closing ceremony that recaps the day's events. Additional attractions such as food booths, photobooths, and a merchandise booth ensure that there’s something for everyone.

Designed to build a bridge between students, faculty, and alumni, Computing Day 2024 will provide a platform for showcasing computing projects, sharing experiences, and promoting an inclusive culture within SoC. With comprehensive planning and the participation of key stakeholders, the event is set to be a memorable day that celebrates the essence and excitement of computing at NUS.
'''

rag_and_flag_body = """
Rag and Flag is an annual event at NUS that brings together students from various faculties to participate in community service and fundraising activities. The day begins with students engaging in volunteer work across different locations, followed by a vibrant parade featuring student performances and creatively decorated floats. This event not only fosters a sense of unity and social responsibility among students but also helps raise funds for various charitable causes. Rag and Flag embodies the spirit of giving back to the community while celebrating student creativity and teamwork.
"""

# temporary stopgap for article content
# convert multiline articles into json
if __name__ == '__main__':
    articles = {
        'wellness_festival': {
            'title': 'SOC Wellness Festival',
            'body': wellness_festival_body,
            'link': 'wellness_festival',
            'imgSrc': '/articles/wellness_festival.jpg',
        },
        'bizcom_league': {
            'title': 'BIZCOM League',
            'body': bizcom_league_body,
            'link': 'bizcom_league',
            'imgSrc': '/articles/bizcom_league.jpg',
        },
        'freshman_social_camp': {
            'title': 'Freshman Social Camp',
            'body': fsc_body,
            'link': 'freshman_social_camp',
            'imgSrc': '/announcements/fsc.jpg'
        },
        'freshman_orientation_camp': {
            'title': 'Freshman Orientation Camp',
            'body': fow_body,
            'link': 'freshman_orientation_camp',
            'imgSrc': '/announcements/fow.jpg'
        },
        'freshman_finale_camp': {
            'title': 'Freshman Finale Camp',
            'body': ffc_body,
            'link': 'freshman_finale_camp',
            'imgSrc': '/announcements/ffc.jpg'
        },
        'computing_bash': {
            'title': 'Computing Bash',
            'body': bash_body,
            'link': 'computing_bash',
            'imgSrc': '/announcements/bash.jpg'
        },
        'computing_day': {
            'title': 'Computing Day',
            'body': computing_day_body,
            'link': 'computing_day',
            'imgSrc': '/announcements/computing_day.png'
        },
        'rag_and_flag': {
            'title': 'Rag and Flag',
            'body': rag_and_flag_body,
            'link': 'rag_and_flag',
            'imgSrc': '/announcements/rag_and_flag.jpg'
        }
    }
    json.dump(articles, open('articles.json', 'w+'))
