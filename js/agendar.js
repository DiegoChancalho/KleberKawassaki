document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.querySelector('.calendar');
    const monthDisplay = calendar.querySelector('.date');
    const daysContainer = calendar.querySelector('.days');
    const addEventWrapper = document.querySelector('.add-event-wrapper');
    const closeBtn = addEventWrapper.querySelector('.close');
    const addEventBtn = addEventWrapper.querySelector('.add-event-btn');
    const eventNameInput = addEventWrapper.querySelector('.event-name');
    const eventTimeFromInput = addEventWrapper.querySelector('.event-time-from');
    const eventTimeToInput = addEventWrapper.querySelector('.event-time-to');
    const eventTypeInput = addEventWrapper.querySelector('.event-type'); // Adicionado para pegar o tipo de evento
    const eventsContainer = document.querySelector('.events');
    let currentMonth;
    let currentYear;
  
    function generateCalendar(month, year) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
  
        monthDisplay.textContent = `${month + 1}/${year}`;
        daysContainer.innerHTML = '';
  
        for (let i = 0; i < firstDay; i++) {
            daysContainer.innerHTML += `<div class="day"></div>`;
        }
  
        for (let day = 1; day <= daysInMonth; day++) {
            daysContainer.innerHTML += `<div class="day" data-date="${year}-${month + 1}-${day}">${day}</div>`;
        }
  
        document.querySelectorAll('.day').forEach(dayElement => {
            dayElement.addEventListener('click', () => {
                if (dayElement.classList.contains('day') && dayElement.textContent.trim() !== '') {
                    showAddEventForm(dayElement.dataset.date);
                }
            });
        });
    }
  
    function showAddEventForm(date) {
        addEventWrapper.classList.add('show');
        addEventWrapper.querySelector('.event-date').textContent = date;
    }
  
    function addEvent() {
        const eventDate = addEventWrapper.querySelector('.event-date').textContent;
        const eventName = eventNameInput.value;
        const eventTimeFrom = eventTimeFromInput.value;
        const eventTimeTo = eventTimeToInput.value;
        const eventType = eventTypeInput.value;
  
        if (eventName && eventTimeFrom && eventTimeTo && eventType) {
            // Definir o tipo de serviço
            const serviceType = eventType === 'foto' ? 'fotografia' : 'vídeo';
  
            // Formatar a mensagem corretamente
            const message = `Olá, gostaria de agendar um serviço de ${serviceType} para o seguinte evento:\n\nNome: ${eventName}\n${eventDate}\nHorário: ${eventTimeFrom} - ${eventTimeTo}\n\nObrigado!`;
  
            // Definir o número de WhatsApp com base no tipo de serviço
            const phoneNumber = eventType === 'foto' ? '5519993058960' : '5519991835793';
  
            // Codificar a mensagem para URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappURL, '_blank');
            
            // Limpar o formulário e esconder o formulário de adicionar evento
            eventNameInput.value = '';
            eventTimeFromInput.value = '';
            eventTimeToInput.value = '';
            eventTypeInput.value = '';
            addEventWrapper.classList.remove('show');
        } else {
            alert('Por favor, preencha todos os campos do evento.');
        }
    }
  
    closeBtn.addEventListener('click', () => {
        addEventWrapper.classList.remove('show');
    });
  
    addEventBtn.addEventListener('click', addEvent);
  
    document.querySelector('.month .prev').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });
  
    document.querySelector('.month .next').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    });
  
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    generateCalendar(currentMonth, currentYear);
  });
  