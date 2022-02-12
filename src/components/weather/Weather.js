import styled from "styled-components";
import SelectedCity from "../../context/WeatherContext";

const Description = styled.span`
  font-weight: bold;
  font-size: 16;
  color: #f1faee;
`;

const ForecastTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const DayCol = styled.div`
  background-color: #e63946;
  padding: 8px;
  margin: 0px 5px;
  border-radius: 15px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    36px -12px 5px 5px rgba(168, 218, 220, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    36px -12px 5px 5px rgba(168, 218, 220, 0);
`;
const Head = styled.h1`
  color: #f1faee;
`;

function Weather() {
  const { forecast } = SelectedCity();
  console.log(forecast);
  return (
    <>
      <div>
        {forecast && (
          <div>
            <Head>{forecast.city.name}</Head>
            <ForecastTable>
              <DayCol>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
                  alt={forecast.list[0].weather[0].main}
                />
                <br />
                <Description>{forecast.list[0].dt_txt}</Description>
                <br />
                <Description>{forecast.list[0].weather[0].main}</Description>
                <br />
                <Description>
                  {parseFloat(forecast.list[0].main.temp - 273.15).toFixed(2)}°C
                </Description>
              </DayCol>
              <DayCol>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`}
                  alt={forecast.list[8].weather[0].main}
                />
                <br />
                <Description>{forecast.list[8].dt_txt}</Description>
                <br />
                <Description>{forecast.list[8].weather[0].main}</Description>
                <br />
                <Description>
                  {parseFloat(forecast.list[8].main.temp - 273.15).toFixed(2)}°C
                </Description>
              </DayCol>
              <DayCol>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`}
                  alt={forecast.list[16].weather[0].main}
                />
                <br />
                <Description>{forecast.list[16].dt_txt}</Description>
                <br />
                <Description>{forecast.list[16].weather[0].main}</Description>
                <br />
                <Description>
                  {parseFloat(forecast.list[16].main.temp - 273.15).toFixed(2)}
                  °C
                </Description>
              </DayCol>
              <DayCol>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon}@2x.png`}
                  alt={forecast.list[24].weather[0].main}
                />
                <br />
                <Description>{forecast.list[24].dt_txt}</Description>
                <br />
                <Description>{forecast.list[24].weather[0].main}</Description>
                <br />
                <Description>
                  {parseFloat(forecast.list[24].main.temp - 273.15).toFixed(2)}
                  °C
                </Description>
              </DayCol>
              <DayCol>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon}@2x.png`}
                  alt={forecast.list[32].weather[0].main}
                />
                <br />
                <Description>{forecast.list[32].dt_txt}</Description>
                <br />
                <Description>{forecast.list[32].weather[0].main}</Description>
                <br />
                <Description>
                  {parseFloat(forecast.list[32].main.temp - 273.15).toFixed(2)}
                  °C
                </Description>
              </DayCol>
            </ForecastTable>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
