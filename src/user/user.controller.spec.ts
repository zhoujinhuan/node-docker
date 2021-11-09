import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.interface';
import { UserDto } from './user.dto';

jest.mock('./user.service')
describe('UserController', () => {

  let controller: UserController;
//   const user = new User[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('mock the total userService layer',async () => {
//    const userService =  jest.createMockFromModule('./user.service');
        (UserService.prototype.findAll as jest.Mock).mockReturnValue({"name":"ticket2","id":2,"details":"the first ticket"});
        const controller = new UserController(new UserService);
//         expect(controller.findAll()).toEqual({"name":"ticket2","id":2,"details":"the first ticket"});
//     userService.findAll().mockResolvedValue({"name":"ticket2","id":2,"details":"the first ticket"});
    await controller.findAll().then(data => {
    expect(data).toEqual({"name":"ticket2","id":2,"details":"the first ticket"});
    });
});

  test('test create ticket error once network error',async () => {
//    const userService =  jest.createMockFromModule('./user.service');
        (UserService.prototype.findAll as jest.Mock).mockReturnValue("the network error code:500");
        const controller = new UserController(new UserService);
//         expect(controller.findAll()).toEqual({"name":"ticket2","id":2,"details":"the first ticket"});
//     userService.findAll().mockResolvedValue({"name":"ticket2","id":2,"details":"the first ticket"});
    await controller.findAll().then(data => {
    expect(data).toEqual("the network error code:500");
    });
});



    test('test if the userService return with error result' , async() =>
    {
        (UserService.prototype.create as jest.Mock).mockReturnValue("the user have been created already");
        const controller = new UserController(new UserService);
        const userDto = new UserDto();
        await controller.saveUser(userDto).then(data => {
            expect(data).toEqual("the user have been created already");
        });
        });

        test('illustrate mocks and spies', async() => {
            const userService = require('./user.service.ts');
            const user = {"name":"luhan","age":31,"breed":"man"};
            const mockFunction = jest.fn().mockReturnValue({"name":"luhan","age":31,"breed":"man"});
            console.log(mockFunction);
            userService.findAll = mockFunction;
            const result = controller.findAll();
            console.log(result);
            expect(result).toEqual(user);

        });
});
