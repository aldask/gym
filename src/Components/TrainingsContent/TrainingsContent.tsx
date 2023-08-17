import React, { useState } from "react";
import { coaches } from "../../Data/coaches";
import { slides } from "../../Data/locationsData";

function TrainingsContent() {
  // Get dates from today
  function getDates(n: number) {
    const result = [];

    for (let i = 1; i <= n; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const fullDate = `${year}-${month}-${day}`;
      result.push(fullDate);
    }

    return result;
  }

  const dates = getDates(20);

  const timeSlots = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const trainingsSet = [
    "Brazil Butt lift",
    "Full body tone",
    "Nirvana fitness",
    "Rock and core",
    "Slow & strong",
    "TRX",
    "TRX yoga",
    "Circle Training",
    "Pilates",
    "Yoga",
    "Stretch & Balance",
    "Grip",
    "Press & Back",
    "HIIT",
    "Zumba",
  ];

  const generateRandomTrainings = () => {
    const maxTrainingsPerTimeSlot = 1;

    const randomTrainings = [];

    for (let i = 0; i < 250; i++) {
      const randomDay = dates[Math.floor(Math.random() * dates.length)];
      const randomTime =
        timeSlots[Math.floor(Math.random() * timeSlots.length)];

      const existingTrainings = randomTrainings.filter(
        (train) => train.date === randomDay && train.time === randomTime
      );

      if (existingTrainings.length < maxTrainingsPerTimeSlot) {
        const randomCoach = coaches[Math.floor(Math.random() * coaches.length)];
        const randomGym = slides[Math.floor(Math.random() * slides.length)];
        const randomTraining =
          trainingsSet[Math.floor(Math.random() * trainingsSet.length)];

        randomTrainings.push({
          date: randomDay,
          time: randomTime,
          coach: randomCoach.name,
          location: randomGym.gymName,
          training: randomTraining,
        });
      }
    }

    return randomTrainings;
  };

  const [trainings, setTrainings] = useState(generateRandomTrainings());

  return (
    <section className="trainings-content">
      <div className="container">
        <div className="trainings-content__box">
          <div className="trainings-content__box__top">
            <h1>GROUP TRAINING’S SCHEDULE</h1>
          </div>
          <div className="trainings-content__box__bottom">
            <div className="trainings-content__box__bottom__container">
              <div className="trainings-content__box__bottom__container--time-slots">
                {["", ...timeSlots].map((time, index) => (
                  <div
                    key={index}
                    className="trainings-content__box__bottom__container--time-slots--time-slot"
                  >
                    <h3>{time}</h3>
                  </div>
                ))}
              </div>
              {dates.map((day, dayId) => (
                <div key={dayId}>
                  <div className="trainings-content__box__bottom__container--time-slots--time-slot">
                    <h3>{day}</h3>
                  </div>
                  <div>
                    {timeSlots.map((time, timeId) => {
                      const matchingTrainings = trainings.filter(
                        (t) => t.date === day && t.time === time
                      );
                      if (matchingTrainings.length > 0) {
                        return (
                          <div
                            key={timeId}
                            className={`trainings-content__box__bottom__container--time-slots--time-slot ${
                              matchingTrainings.length > 0
                                ? "filled-cell"
                                : "empty-cell"
                            }`}
                            style={{
                              gridColumn: `span ${matchingTrainings.length}`,
                            }}
                          >
                            {matchingTrainings.map((session, sessionId) => (
                              <div
                                key={sessionId}
                                className={`trainings-content__box__bottom__container--time-slots--time-slot--training`}
                              >
                                <h4>{session.location}</h4>
                                <p>
                                  <span className="blue">
                                    {session.training}
                                  </span>
                                </p>
                                <p>
                                  <span className="black">{session.time}</span>
                                </p>
                                <p>
                                  <span className="name">{session.coach}</span>
                                </p>
                              </div>
                            ))}
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={timeId}
                            className={`trainings-content__box__bottom__container--time-slots--time-slot empty-cell`}
                          ></div>
                        );
                      }
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingsContent;
