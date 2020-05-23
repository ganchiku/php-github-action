<?php

declare(strict_types=1);

namespace Ganchiku\PHPGithubAction;

use PHPUnit\Framework\TestCase;

class PHPGithubActionTest extends TestCase
{
    /**
     * @var PHPGithubAction
     */
    protected $pHPGithubAction;

    protected function setUp() : void
    {
        $this->pHPGithubAction = new PHPGithubAction;
    }

    public function testIsInstanceOfPHPGithubAction() : void
    {
        $actual = $this->pHPGithubAction;
        $this->assertInstanceOf(PHPGithubAction::class, $actual);
    }
}
