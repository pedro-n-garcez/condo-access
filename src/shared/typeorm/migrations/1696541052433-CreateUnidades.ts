import { 
  MigrationInterface, 
  QueryRunner, 
  Table, 
  TableForeignKey 
} from "typeorm";

export class CreateUnidades1696541052433 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'unidades',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'condominio_id',
            type: 'int'
          }
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'unidades',
      new TableForeignKey({
        columnNames: ['condominio_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'condominios',
        onDelete: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('unidades', 'condominios');
    await queryRunner.dropTable('unidades');
  }
}
