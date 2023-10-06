import { MigrationInterface, QueryRunner } from "typeorm";
import Unidade from "../../../modules/unidades/typeorm/entities/Unidade";
import Condominio from "../../../modules/condominios/typeorm/entities/Condominio";

export class SeedUnidade1696609556876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const condominioRepository = queryRunner.manager.getRepository(Condominio);
        const condominio = await condominioRepository.findOne({ name: 'condo' });

        await queryRunner.manager.save(
            queryRunner.manager.create<Unidade>(Unidade, [
                {
                    id: 1,
                    name: 'A1',
                    condominio
                },
                {
                    id: 2,
                    name: 'A2',
                    condominio
                }
            ]),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM unidade`);
    }

}
