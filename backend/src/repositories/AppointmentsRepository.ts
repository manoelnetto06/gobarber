import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

//
// EntityRepository - decorator que vai receber um Model

// Classe Repository é nativa, vai receber o model, no caso Appointment

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    // O retorno de uma função assíncrona, sempre vai ser uma promise; quando utiliza o async, tem que utilizar o promise
    // O retorno da promise será 'Appointment | null', será o response da requisição

    public async findByDate(date: Date): Promise<Appointment | null> {
        // FindOne - fazer a busca - encontrar um Appointment - ele é promise, preciso utilizar o await por conta da demora

        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default AppointmentsRepository;
