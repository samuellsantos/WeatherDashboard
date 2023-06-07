import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'chart.js/auto'



export const LeftChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [temperatures, setTemperatures] = useState([])
  const city = useSelector((state: GetStateType) => state.changeCity)


  useEffect(()=> {
    fetchData()
  }, [city])

    const API_KEY = '3905b56a5d0ad9c3e625933cb4c99de6'

    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)

      const data = await response.json()
      const eightHourForecast = data.list.slice(0, 8)
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
              labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '23:00'],
              datasets: [
                {
                  label: 'Tommorrow Temperatures',
                  fill: true,
                  data: temperatures.map((temp) => temp.main.temp.toFixed()),
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
