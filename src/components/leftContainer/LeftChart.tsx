import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'chart.js/auto'



export const LeftChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [temperatures, setTemperatures] = useState([])
  const [date, setDate] = useState([])
  const city = useSelector((state: any) => state.changeCity)


  useEffect(()=> {
    fetchData()
  }, [city])

    const API_KEY = '3905b56a5d0ad9c3e625933cb4c99de6'

    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)

      const data = await response.json()
      const eightHourForecast = data.list.slice(0, 8)
      const dataHour = eightHourForecast.map((forecast: any) => {
        const dataTime = forecast.dt_txt;
        const time = dataTime.split(' ')[1];
        const [hours, minutes] = time.split(':')
        const dateWithoutSeconds = `${hours}:${minutes}`
        return dateWithoutSeconds;
      })

      setDate(dataHour)
      setTemperatures(eightHourForecast)
    } 

    useEffect(() => {
      if (chartRef.current) {
        if (chartInstanceRef.current) {
          // Destrua o gráfico anterior antes de criar um novo
          chartInstanceRef.current.destroy();
        }
  
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300); // Define o gradiente verticalmente

        gradient.addColorStop(0, '#18396E'); // Cor inicial do gradiente
        gradient.addColorStop(1, '#385B91'); // Cor inicial do gradiente

          chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
              labels: date,
              datasets: [
                {
                  label: 'Tommorrow Temperatures',
                  fill: true,
                  data: temperatures.map((temp: any) => temp.main.temp.toFixed()),
                  backgroundColor: gradient,
                  borderColor: '#fff',
                  borderWidth: 2,
                  tension: .4,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: '#ddd', // Cor das linhas de grade do eixo Y
                  },
                  ticks: {
                    color: '#777', // Cor dos rótulos do eixo Y
                  },
                },
                x: {
                  grid: {
                    display: false, // Remover as linhas de grade do eixo X
                  },
                  ticks: {
                    color: '#777', // Cor dos rótulos do eixo X
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: '#777', // Cor dos rótulos da legenda
                  },
                },
              },
            },
          });
        }
      }
    }, [temperatures])


  return (
    <canvas ref={chartRef}></canvas>
  )
}
