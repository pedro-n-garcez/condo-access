import { MigrationInterface, QueryRunner } from "typeorm";
import Condominio from "../../../modules/condominios/typeorm/entities/Condominio";

export class SeedCondominio1696609239403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<Condominio>(Condominio, {
              id: 1,
              name: 'condo',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM condominio`);
    }

}
