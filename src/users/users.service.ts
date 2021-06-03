import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Kenny' },
    { id: 1, name: 'Kenny' },
    { id: 2, name: 'Tope' },
  ];

  findAll(name?: string) {
    if (name) return this.users.filter((user) => user.name === name);
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((user: User) => user.id === userId);
  }

  createUser(CreateUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...CreateUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
