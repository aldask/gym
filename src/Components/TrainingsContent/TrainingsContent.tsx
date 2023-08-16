import React, { useState } from "react";

function TrainingsContent() {
  // TESTING CODE FOR GENERATING RANDOM TRAININGS ON RANDOM DAYS AT RANDOM TIMES
  const sampleApiDays = [
    "2023-08-16",
    "2023-08-17",
    "2023-08-18",
    "2023-08-19",
    "2023-08-20",
  ];

  const generateRandomTrainings = () => {
    const times = [
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

    const maxTrainingsPerTimeSlot = 1;

    const randomTrainings = [];

    for (let i = 0; i < 19; i++) {
      const randomDay =
        sampleApiDays[Math.floor(Math.random() * sampleApiDays.length)];
      const randomTime = times[Math.floor(Math.random() * times.length)];

      const existingTrainings = randomTrainings.filter(
        (train) => train.date === randomDay && train.time === randomTime
      );

      if (existingTrainings.length < maxTrainingsPerTimeSlot) {
        randomTrainings.push({
          date: randomDay,
          time: randomTime,
          title: `training ${i + 1}`,
          instructor: `coach ${(i % 5) + 1}`,
        });
      }
    }

    return randomTrainings;
  };

  const [trainings, setTrainings] = useState(generateRandomTrainings());

  const timeSlots = [
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
                <div className="trainings-content__box__bottom__container--time-slots--time-slot"></div>
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    className="trainings-content__box__bottom__container--time-slots--time-slot"
                  >
                    <h3>{time}</h3>
                  </div>
                ))}
              </div>

              {sampleApiDays.map((day, dayId) => (
                <div
                  key={dayId}
                  className="trainings-content__box__bottom__container--day"
                >
                  <div className="trainings-content__box__bottom__container--time-slots--time-slot">
                    <h3>{day}</h3>
                  </div>
                  <div className="trainings-content__box__bottom__container--day--trainings">
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
                              <div key={sessionId} className={`training`}>
                                <h4>{session.title}</h4>
                                <p>{session.instructor}</p>
                                <p>{session.time}</p>
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
