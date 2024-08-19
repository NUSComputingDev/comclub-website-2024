'use client';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import WindowCard from '../../layout/WindowCard';

export function Candidates() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const data = cards.map((card, index) => {
    const content = (
      <>
        <div className='w-48 p-4 flex flex-col items-start gap-1'>
          <motion.div
            className='self-center'
            layoutId={`image-${card.title}-${id}-${card.id}`}
          >
            <img
              src={card.src}
              alt={card.title}
              className='rounded-md w-32 h-32 object-cover object-center self-center'
            />
          </motion.div>
          <div className='h-20 m-2'>
            <motion.h3
              layoutId={`title-${card.title}-${id}-${card.id}`}
              className='font-medium text-neutral-800 text-center md:text-left'
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.description}-${id}-${card.id}`}
              className='text-neutral-600 text-center md:text-left'
            >
              {card.description}
            </motion.p>
          </div>
          <motion.button
            layoutId={`button-${card.title}-${id}-${card.id}`}
            className='px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-yellow-500 hover:text-white text-black mt-8'
          >
            {card.ctaText}
          </motion.button>
        </div>
      </>
    );

    return (
      <motion.div
        layoutId={`card-${card.title}-${id}-${card.id}`}
        key={`card-${card.title}-${id}-${card.id}`}
        onClick={() => setActive(card)}
        className='p-4 flex flex-row flex-wrap justify-center
            items-center rounded-xl cursor-pointer'
      >
        <WindowCard content={content} key={index}></WindowCard>
      </motion.div>
    );
  });

  return (
    <section className='elections h-full gap-4'>
      <h1 className='title'>Candidates</h1>
      <p className='text-neutral-500 text-xl text-center'>
        See the candidates running for the NUS Students&apos; Computing Club
        Elections today!
      </p>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-[100]'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0 grid place-items-center z-[101]'>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}-${active.id}`}
              ref={ref}
              className='w-full max-w-[800px] h-full sm:h-fit md:max-h-[93%] px-2 flex flex-col sm:flex-row bg-white sm:rounded-3xl overflow-auto self-center sm:overflow-hidden'
            >
              <motion.div
                className='w-full my-auto'
                layoutId={`image-${active.title}-${id}-${active.id}`}
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className=' w-[500px] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center self-center h-fit'
                />
              </motion.div>

              <div className='w-full pt-8'>
                <div className='flex justify-between items-start p-4'>
                  <div className=''>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}-${active.id}`}
                      className='font-bold text-neutral-700'
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}-${active.id}`}
                      className='text-neutral-600 overflow-auto'
                    >
                      {active.description}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='text-neutral-600 overflow-auto'
                    >
                      {active.year} / {active.major}
                    </motion.p>
                  </div>
                </div>
                <div className='relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-neutral-600 text-xs md:text-sm h-fit sm:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto'
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className='gap-8 flex flex-row flex-wrap justify-center items-center w-full px-8 md:px-24'>
        {data}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};

const cards = [
  {
    id: 1,
    description: 'President',
    title: 'Liu YuHang',
    src: '/elections/candidates/liuyuhang.jpg',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Dare to reach the highest ! As an experienced campus leader, an
          education business boss(&CEO) leading 172 employees, and a prominent
          Information Olympiad competitor, I dare to reach the highest and run
          for Computing Club’s President. I am ready to stear SoC family to a
          promising future with my great passion, effective communication and
          practical actions.
        </p>
      );
    },
  },
  {
    id: 2,
    description: 'Finance Secretary',
    title: 'Chen Dong Jun',
    src: '/elections/candidates/chendongjun.jpg',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hi, my name is Dong Jun, a Y1 CS major and I am running for Finance
          Secretary. Finance security and independence has been something that I
          care about deeply and I hope to be able to contribute in a related way
          to SoC. Having worked at an admin job in a construction company
          before, I have developed analytical and organization skills that can
          serve as a foundation for the role. Regardless of past experience, I
          believe in perpetual improvement and would strive to learn even more
          from my peers and seniors. I believe that my meticulous nature and
          willingness to work hard would be instrumental in ensuring the
          accuracy of financial reports and the success of SoC projects. I aim
          to optimise budgetary processes so that our community can get more
          with less expenditure. Let me show you how less is more.
        </p>
      );
    },
  },
  {
    id: 3,
    description: 'Vice President Internal Relations',
    title: 'Jha Satwik',
    src: '/elections/candidates/jhasatwik.jpg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          My journey with Com Club began with the unforgettable experience of
          FSC ’23, which inspired me to join this vibrant community. Over the
          past year, I have had the privilege of organizing events like the exam
          welfare pack distribution and the archery funshoot ’24, all of which
          have allowed me to forge strong connections and create lasting
          memories with fellow members and classmates. As Vice President of
          Internal Relations, my goal is to foster the same spirit of fun,
          friendship, and enrichment that I have enjoyed. I am committed to
          enhancing the internal culture of Com Club by organizing engaging
          events, promoting inclusivity, and building stronger bonds among
          students. Together, we can create an environment where everyone feels
          valued, connected, and excited to participate.
        </p>
      );
    },
  },
  {
    id: 4,
    description: 'Vice President Internal Relations',
    title: 'Mu Junrong',
    src: '/elections/candidates/Mu_Junrong_photo.jpg',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hi SoC! I am Junrong. As a candidate for Vice President (Internal
          Relations) and Director of Welfare, I am committed to serving you and
          enhancing your experience at SoC. I aim to create a more supportive,
          inclusive and vibrant community in SoC through engaging sports and
          cultural events, along with welfare initiatives that address your
          needs and reduce stress. Whether you are an introvert or extrovert, a
          local buddy or international friend, there is always something for
          you. SoC will be your second home, your strongest pillar of support
          and the place to unleash your potential. With my experience in the
          Students’ Council where I served as the House Captain and led many
          meaningful initiatives, I have developed strong event planning and
          collaboration skills to serve you. I will be your loyal listener and
          strongest supporter, turning your ideas into actions. With your
          support, I am ready to make your SoC journey fulfilling and memorable!
        </p>
      );
    },
  },
  {
    id: 5,
    description: 'FOP Director',
    title: 'Gowri Sumesh Menon',
    src: '/elections/candidates/gowri.jpg',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          I am someone who enjoys meeting and working with new people. I have
          been involved in orientation projects in school and junior college
          many times and truly enjoy the process of getting to know someone new
          and helping to ease them into a new community. Despite my interest in
          student engagement and my leadership experiences in council, I have
          never taken on such a big role before. Which is why I believe that
          becoming the FOPD will help me venture outside my comfort zone and
          explore my interests. I am aware that as FOPD, I am going to be
          entrusted with many responsibilities and put under pressure many
          times, but I believe that I will be able to fulfill the role well. I
          am coming into this election to learn and regardless of my role in
          FOP, I hope to take back many life lessons and experiences with me.
        </p>
      );
    },
  },
  {
    id: 6,
    description: 'Vice President External Relations',
    title: 'Lee Miao En Emelyn',
    src: '/elections/candidates/emelynlee.jpg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hi! I’m Emelyn and I’m running for the position of Vice-President
          External Relations (VP ER). The three words that describe me are
          earnest, mindful, and steadfast. I care deeply about our community,
          and no matter the situation, I will always have your best interests at
          heart. I believe strongly in being fully present and in giving my time
          and attention to the problem at hand. My goal is to provide the
          unyielding strength you need to navigate difficult situations. The
          role of VP ER is an outward-facing one that requires one to
          communicate with external parties on behalf of SOC. I believe that in
          this position, it’s essential to consistently strive for outcomes that
          benefit the students while standing firm when challenges arise. If
          elected, I will dedicate myself to forging valuable and meaningful
          connections that truly benefit our community.
        </p>
      );
    },
  },
  {
    id: 7,
    description: 'Deputy Finance Secretary',
    title: 'Sun Jiaen',
    src: '/elections/candidates/sunjiaen.jpg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hi, I'm Sun Jiaen, a Year 2 Computer Science student. Previously, I
          was in Year 1 of Business Analytics. I'm running for a position in the
          Computing Club since it has significantly enriched my university
          experience. From the vibrant orientation events to the thoughtful exam
          goodie bags, the club’s commitment to student welfare has deeply
          impressed me. I chose to run for the Deputy Finance Secretary since I
          believe that I possess the required qualities to do justice to the
          position. My experience as an Amazon logistics executive intern has
          equipped me with the necessary organizational and financial skills to
          excel in this role. Additionally, my involvement in NUS Biathlon
          committee as marketing executive has provided me with valuable
          experience in securing sponsorships and managing partnerships. As a
          Deputy Finance Secretary, I will diligently manage the club’s budget,
          ensuring accurate financial records and timely submission of all
          required reports. I will also prioritize securing funds and allocating
          resources that are actually needed to support the vibrant activities
          that make our SoC community thrive. Please vote for me!
        </p>
      );
    },
  },
  {
    id: 8,
    description: 'Director of Welfare',
    title: 'Ravichandran Gokul',
    src: '/elections/candidates/ravi.jpg',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          I am Ravichandran Gokul, a Year 1 Computer Science student, and I am
          running for Director of Welfare under the Internal Relations wing of
          Management Committee in Computing Club. What led me to run for this
          position is a vision; one that I hope will come to fruition for
          AY2024/2025. University life is filled with numerous trials and
          tribulations which will take a toll on all of us students from time to
          time. My goal is to reinforce a culture where students feel free to
          feed off each other’s energy and foster a strong sense of community in
          the process. To achieve this, I aim to conduct interactive and
          engaging welfare activities and prepare welfare arrangements in timely
          intervals. I aim to seek a greater understanding of the student
          populace so that these actions could have the greatest impact
          possible. Together, we can enhance and deepen our welfare and
          satisfaction!
        </p>
      );
    },
  },
  {
    id: 9,
    description: 'Director of FOP',
    title: 'Ryan Neo',
    src: '/elections/candidates/ryanneo.PNG',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hello! I am Ryan Neo, a Year 1 Computer Science student. I wish to
          join the Management Committee because of my passion for serving and
          representing the student body. I take great pride in my leadership
          capabilities and believe I would be well-suited to be your voice and
          instil change for the betterment of all students. Particularly, I am
          running for the role of Director, Freshmen Orientation Projects.
          Having attended orientation myself, I had an incredibly great time and
          recognised the importance of being able to execute such camps where we
          assimilate students into their new home of SoC. These are the most
          crucial touchpoints where freshmen get to befriend their peers and
          seniors, uniting SoC across different levels. I hope to continue the
          good work of my predecessors, striving to provide fun and memorable
          experiences for our freshmen, making them feel welcomed and
          cultivating our shared sense of identity.
        </p>
      );
    },
  },
  {
    id: 10,
    description: 'Director of Rag and Flag',
    title: 'Choong Jing Xiang',
    src: '/elections/candidates/jingxiang.jpeg',
    ctaText: 'View More',
    year: 'Year 1',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hello everyone, I’m Choong Jing Xiang, a first-year Computer Science
          student here at the School of Computing. Before starting university, I
          was excited about all the new learning opportunities and unique
          experiences NUS offers, but at the same time, I felt apprehensive as
          this was so different from everything that I know and I believe many
          of you share the same sentiments. However, through the Freshmen
          Orientation Programs and Rag and Flag, I felt an incredible sense of
          welcome and belonging within the SoC family which helped me better
          transition into university life. If I were to be elected as the
          Director of Rag and Flag, my goal is to give back to the school and
          the student body as well as provide this unique experience to the next
          batch of freshmen to help make them feel at home. And of course,
          Computing Rag and Flag Overall Champion 2025?
        </p>
      );
    },
  },
  {
    id: 11,
    description: 'Vice President Student Life',
    title: 'Jolyn Leow',
    src: '/elections/candidates/jolyn.jpeg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Hello! I am Jolyn Leow, aspiring to be your next Vice President
          (Student Life). I am very passionate in serving the SoC community,
          which has shaped my university life positively. Having been actively
          involved in organizing one of the Computing Orientation camps this
          year, I have gained valuable insights into event management and
          student engagement. Leveraging on this significant experience, I am
          committed to creating a vibrant and supportive environment, where
          every student can connect, thrive and create lasting memories in SoC.
          My dedication to serving the student population, coupled with my
          experience and understanding of student needs, equips meto better
          enhance the student life and experience in SoC. Together with the
          Management Committee members, I hope to build an SoC that is more than
          just an academic hub, but also an inclusive and welcoming community
          where every student feels at home.
        </p>
      );
    },
  },
  {
    id: 12,
    description: 'Director of Welfare',
    title: 'Shananth Sivakumar',
    src: '/elections/candidates/shananth.jpg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          I am running for the role of Welfare IC in the Computing Club since I
          am extremely passionate about creating a well bonded computing family.
          Given the endless assignments and heavy workload, students sometimes
          do not feel valued and heard. Therefore, I aim to create an open
          communication channel whereby everyone can share their opinions on
          what could aid in the betterment of their life so that I can do my
          best in making it happen. Furthermore, I am also committed to
          embedding welfare with events which encourage social connection while
          advocating for a respectful and inclusive culture. Together, we can
          ensure that everyone not only excels academically but also feels
          supported and empowered during this journey. You guys can help me turn
          this vision into reality, ensuring that this isn’t just a place for us
          to learn but also to thrive.
        </p>
      );
    },
  },
  {
    id: 13,
    description: 'Placeholder',
    title: 'Parama Roy Poja',
    src: '/elections/candidates/.jpg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Placeholder
        </p>
      );
    },
  },
  {
    id: 14,
    description: 'Placeholder',
    title: 'Raeeda Ibnat Hossain',
    src: '/elections/candidates/.jpg',
    ctaText: 'View More',
    year: 'Year 2',
    major: 'Computer Science',
    content: () => {
      return (
        <p>
          Placeholder
        </p>
      );
    },
  },
];
