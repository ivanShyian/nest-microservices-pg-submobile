import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export default {
transport: Transport.GRPC,
    options: {
        package: 'app',
        protoPath: join(__dirname, 'app.proto')
    }
}