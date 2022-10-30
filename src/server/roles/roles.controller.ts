import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles-auth/roles.decorator';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Получение роли по значению' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  @ApiParam({
    name: 'value',
    required: true,
    description: 'Значение роли',
    example: 'USER',
    type: 'string',
  })
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }

  /*@Roles("HR")*/
  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }
}
