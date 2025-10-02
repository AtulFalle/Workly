import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get application data',
    description: 'Returns basic application information'
  })
  @ApiResponse({
    status: 200,
    description: 'Application data retrieved successfully'
  })
  getData() {
    return this.appService.getData();
  }

  @Get('health')
  @ApiOperation({ 
    summary: 'Health check',
    description: 'Check if the authentication service is running'
  })
  @ApiResponse({
    status: 200,
    description: 'Service is healthy',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ok' },
        message: { type: 'string', example: 'Authentication service is running' },
        timestamp: { type: 'string', example: '2025-01-02T18:00:00.000Z' }
      }
    }
  })
  getHealth() {
    return {
      status: 'ok',
      message: 'Authentication service is running',
      timestamp: new Date().toISOString(),
    };
  }
}
